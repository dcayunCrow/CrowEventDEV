import { useState, useEffect } from 'react';
import { resolveUserCity, getCachedCity } from '@/services/locationService';
import type { LocationResult } from '@/services/locationService';

interface UseUserCityReturn {
  city: string | null;
  country: string | null;
  loading: boolean;
  error: string | null;
}

export default function useUserCity(): UseUserCityReturn {
  // null inicial para evitar mismatch de hidratación SSR
  const [location, setLocation] = useState<LocationResult>({ city: null, country: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    // Check síncrono del cache primero (evita flash de loading)
    const cached = getCachedCity();
    if (cached) {
      setLocation(cached);
      setLoading(false);
      return;
    }

    // Flujo async: IP → GPS → fallback Argentina
    resolveUserCity(abortController.signal)
      .then((result) => {
        if (!abortController.signal.aborted) {
          setLocation(result);
          setError(null);
        }
      })
      .catch((err) => {
        if (!abortController.signal.aborted) {
          setError(err instanceof Error ? err.message : 'No se pudo obtener la ubicación');
          // Fallback: Argentina por defecto si todo falla
          setLocation({ city: null, country: 'Argentina' });
        }
      })
      .finally(() => {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    city: location.city,
    country: location.country,
    loading,
    error,
  };
}
