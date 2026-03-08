/**
 * Variables de entorno centralizadas.
 * Todas las URLs de APIs externas se leen desde aquí.
 *
 * NEXT_PUBLIC_ → disponibles en el cliente (browser)
 * Sin prefijo  → solo disponibles en el servidor
 */

export const env = {
  // ── Location ──
  ipApiUrl: process.env.NEXT_PUBLIC_IP_API_URL ?? 'https://ipapi.co/json/',
  nominatimApiUrl: process.env.NEXT_PUBLIC_NOMINATIM_API_URL ?? 'https://nominatim.openstreetmap.org/reverse',

  // ── App ──
  // Futuras variables van acá:
  // apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001',
} as const;
