'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LuLayoutGrid, LuSquare, LuRows2 } from 'react-icons/lu';
import { useViewMode, ViewMode } from '@/contexts/ViewModeContext';
import styles from './ViewModeSelector.module.scss';

const MODES: { mode: ViewMode; label: string; Icon: React.ElementType }[] = [
  { mode: 'grilla',   label: 'Grilla',   Icon: LuLayoutGrid },
  { mode: 'tarjetas', label: 'Tarjetas', Icon: LuSquare },
  { mode: 'lista',    label: 'Lista',    Icon: LuRows2 },
];

export default function ViewModeSelector() {
  const { viewMode, setViewMode } = useViewMode();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentMode = MODES.find((m) => m.mode === viewMode) ?? MODES[0];
  const CurrentIcon = currentMode.Icon;

  const toggleDropdown = () => {
    if (!isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'fixed',
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (mode: ViewMode) => {
    setViewMode(mode);
    setIsOpen(false);
  };

  // Cerrar al hacer click fuera
  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideTrigger = triggerRef.current?.contains(target);
      const insideDropdown = dropdownRef.current?.contains(target);
      if (!insideTrigger && !insideDropdown) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        className={styles.triggerButton}
        onClick={toggleDropdown}
        aria-label="Cambiar vista"
        aria-expanded={isOpen}
      >
        <CurrentIcon size={22} strokeWidth={2} />
      </button>

      {isOpen &&
        createPortal(
          <div ref={dropdownRef} className={styles.dropdown} style={dropdownStyle} role="group" aria-label="Seleccionar vista">
            {MODES.map(({ mode, label, Icon }) => (
              <button
                key={mode}
                className={`${styles.modeBtn} ${viewMode === mode ? styles.active : ''}`}
                onClick={() => handleSelect(mode)}
                aria-pressed={viewMode === mode}
              >
                <Icon size={16} strokeWidth={2} />
                <span>{label}</span>
              </button>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
