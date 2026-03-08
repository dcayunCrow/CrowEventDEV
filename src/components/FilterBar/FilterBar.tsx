'use client';

import { useState, useRef, useEffect } from 'react';
import { LuMapPin, LuCalendar, LuHeart, LuMoon, LuFilter } from 'react-icons/lu';
import FilterPill from '@/components/FilterPill';
import type { FilterStatus } from '@/components/FilterPill';
import useUserCity from '@/hooks/useUserCity';
import styles from './FilterBar.module.scss';

export default function FilterBar() {
  const { city, country, loading: cityLoading } = useUserCity();

  // Label dinámico: ciudad → país → 'Ubicación'
  const locationLabel = city ?? country ?? 'Ubicación';

  // Ubicación: seleccionado por defecto (sin menú)
  const [locationStatus, setLocationStatus] = useState<FilterStatus>('selected');
  // Fecha: sin seleccionar, abre menú
  const [dateStatus,     setDateStatus]     = useState<FilterStatus>('unselected');
  // Más likeados: sin seleccionar, sin menú
  const [likesStatus,    setLikesStatus]    = useState<FilterStatus>('unselected');
  // Noche: sin seleccionar, sin menú
  const [nightStatus,    setNightStatus]    = useState<FilterStatus>('unselected');
  // Más filtros: sin seleccionar, abre menú
  const [moreStatus,     setMoreStatus]     = useState<FilterStatus>('unselected');

  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    let backTimer: ReturnType<typeof setTimeout>;
    const peekTimer = setTimeout(() => {
      el.scrollTo({ left: 200, behavior: 'smooth' });
      backTimer = setTimeout(() => {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      }, 700);
    }, 500);
    return () => {
      clearTimeout(peekTimer);
      clearTimeout(backTimer);
    };
  }, []);

  // Pills sin menú: alterna selected ↔ unselected
  const toggleSimple = (
    current: FilterStatus,
    set: React.Dispatch<React.SetStateAction<FilterStatus>>
  ) => {
    set(current === 'selected' ? 'unselected' : 'selected');
  };

  // Pills con menú: activo (rojo) mientras el menú está abierto
  const toggleMenu = (
    current: FilterStatus,
    set: React.Dispatch<React.SetStateAction<FilterStatus>>
  ) => {
    set(current === 'active' ? 'unselected' : 'active');
    // TODO: abrir el modal correspondiente
  };

  return (
    <div ref={barRef} className={styles.filterBar}>
      <FilterPill
        label={cityLoading ? 'Ubicación' : locationLabel}
        icon={<LuMapPin size={20} />}
        status={locationStatus}
        onClick={() => toggleSimple(locationStatus, setLocationStatus)}
      />

      <FilterPill
        label="Fecha"
        icon={<LuCalendar size={20} />}
        status={dateStatus}
        onClick={() => toggleMenu(dateStatus, setDateStatus)}
      />

      <FilterPill
        label="Más likeados"
        icon={<LuHeart size={20} />}
        status={likesStatus}
        onClick={() => toggleSimple(likesStatus, setLikesStatus)}
      />

      <FilterPill
        label="Noche"
        icon={<LuMoon size={20} />}
        status={nightStatus}
        onClick={() => toggleSimple(nightStatus, setNightStatus)}
      />

      <FilterPill
        icon={<LuFilter size={20} />}
        status={moreStatus}
        onClick={() => toggleMenu(moreStatus, setMoreStatus)}
      />
    </div>
  );
}
