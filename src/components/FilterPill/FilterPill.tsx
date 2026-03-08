'use client';

import React from 'react';
import styles from './FilterPill.module.scss';

export type FilterStatus = 'unselected' | 'selected' | 'active';

export interface FilterPillProps {
  label?: string;
  icon: React.ReactNode;
  status: FilterStatus;
  onClick: () => void;
}

export default function FilterPill({ label, icon, status, onClick }: FilterPillProps) {
  const statusClass = {
    unselected: '',
    selected: styles.statusSelected,
    active: styles.statusActive,
  }[status];

  return (
    <button
      className={`${styles.pill} ${statusClass}`}
      onClick={onClick}
      aria-pressed={status !== 'unselected'}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}
