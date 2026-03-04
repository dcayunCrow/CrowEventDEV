import type { EventTicket } from '@/types/event';

export const formatPrice = (ticket: EventTicket): string => {
  if (ticket.access === 'FREE') {
    return 'Gratis';
  }

  if (!ticket.amount) {
    return 'Consultar precio';
  }

  if (ticket.currency === 'ARS') {
    return `$${ticket.amount.toLocaleString('es-AR')}`;
  }

  return `${ticket.currency} ${ticket.amount}`;
};
