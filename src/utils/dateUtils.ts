// Formatear fecha - formato consistente para SSR
// isClient evita problemas de hidratación entre servidor y cliente
export const formatDate = (dateString: string, isClient: boolean): string => {
  if (!isClient) {
    return new Date(dateString).toISOString().split('T')[0];
  }
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('es-AR', options);
};

// Formato corto para tarjetas de evento: "02 abr. 2026"
export const formatEventDate = (dateString: string): string => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

// Formatear hora - formato consistente para SSR
// isClient evita problemas de hidratación entre servidor y cliente
export const formatTime = (dateString: string, isClient: boolean): string => {
  if (!isClient) {
    const date = new Date(dateString);
    return `${date.getUTCHours()}:${date.getUTCMinutes().toString().padStart(2, '0')}`;
  }
  const date = new Date(dateString);
  return date.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
