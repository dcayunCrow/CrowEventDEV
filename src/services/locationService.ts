import { env } from '@/config/env';

const CACHE_KEY = 'user_city';
const CACHE_COUNTRY_KEY = 'user_country';
const CACHE_EXPIRY_KEY = 'user_city_expiry';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 horas

export interface LocationResult {
  city: string | null;
  country: string | null;
}

/**
 * Prioridad 1: Lee ciudad cacheada en localStorage (si no expiró)
 */
export function getCachedCity(): LocationResult | null {
  try {
    const expiry = localStorage.getItem(CACHE_EXPIRY_KEY);
    if (expiry && Date.now() > Number(expiry)) {
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(CACHE_COUNTRY_KEY);
      localStorage.removeItem(CACHE_EXPIRY_KEY);
      return null;
    }

    const city = localStorage.getItem(CACHE_KEY);
    const country = localStorage.getItem(CACHE_COUNTRY_KEY);
    if (city) {
      return { city, country };
    }
  } catch {
    // localStorage no disponible (SSR, incógnito con storage deshabilitado)
  }
  return null;
}

/**
 * Guarda la ciudad en localStorage con expiración de 24h
 */
function cacheLocation(city: string, country: string | null): void {
  try {
    localStorage.setItem(CACHE_KEY, city);
    if (country) localStorage.setItem(CACHE_COUNTRY_KEY, country);
    localStorage.setItem(CACHE_EXPIRY_KEY, String(Date.now() + CACHE_DURATION_MS));
  } catch {
    // Silenciar si localStorage no está disponible
  }
}

/**
 * Prioridad 2: Obtener ciudad via IP (ipapi.co)
 * Docs: https://ipapi.co/api/
 * HTTPS, CORS habilitado, 1000 req/día gratis
 */
export async function fetchCityByIP(signal?: AbortSignal): Promise<LocationResult> {
  const response = await fetch(env.ipApiUrl, { signal });

  if (!response.ok) {
    throw new Error(`IP API respondió ${response.status}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.reason ?? 'IP API devolvió un error');
  }

  const city = data.city as string | undefined;
  const country = data.country_name as string | undefined;

  if (city) {
    cacheLocation(city, country ?? null);
    return { city, country: country ?? null };
  }

  if (country) {
    return { city: null, country };
  }

  throw new Error('IP API no devolvió ciudad ni país');
}

/**
 * Obtener coords via GPS del navegador
 */
function getGPSPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalización no soportada en este navegador'));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, (err) => {
      switch (err.code) {
        case err.PERMISSION_DENIED:
          reject(new Error('Permiso de ubicación denegado'));
          break;
        case err.POSITION_UNAVAILABLE:
          reject(new Error('Ubicación no disponible'));
          break;
        case err.TIMEOUT:
          reject(new Error('Tiempo de espera agotado para obtener ubicación'));
          break;
        default:
          reject(new Error('Error desconocido de geolocalización'));
      }
    }, {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 300000, // 5 min cache del browser
    });
  });
}

/**
 * Geocodificación inversa: coords → ciudad (Nominatim / OpenStreetMap)
 */
async function reverseGeocode(lat: number, lon: number, signal?: AbortSignal): Promise<LocationResult> {
  const url = `${env.nominatimApiUrl}?format=json&lat=${lat}&lon=${lon}&accept-language=es`;

  const response = await fetch(url, {
    signal,
    headers: { 'User-Agent': 'CrowApp/1.0' },
  });

  if (!response.ok) {
    throw new Error(`Nominatim respondió ${response.status}`);
  }

  const data = await response.json();
  const address = data.address as Record<string, string> | undefined;

  const city = address?.city || address?.town || address?.village || address?.municipality || null;
  const country = address?.country || null;

  if (city) {
    cacheLocation(city, country);
    return { city, country };
  }

  if (country) {
    return { city: null, country };
  }

  throw new Error('Nominatim no devolvió ciudad ni país');
}

/**
 * Prioridad 3: GPS + Geocodificación inversa
 */
export async function fetchCityByGPS(signal?: AbortSignal): Promise<LocationResult> {
  const position = await getGPSPosition();
  const { latitude, longitude } = position.coords;
  return reverseGeocode(latitude, longitude, signal);
}

/**
 * Flujo completo: Cache → IP → GPS
 */
export async function resolveUserCity(signal?: AbortSignal): Promise<LocationResult> {
  // Prioridad 1: Cache
  const cached = getCachedCity();
  if (cached) return cached;

  // Prioridad 2: IP API
  try {
    return await fetchCityByIP(signal);
  } catch {
    // IP falló, intentar GPS
  }

  // Prioridad 3: GPS + Nominatim
  return fetchCityByGPS(signal);
}
