import React from 'react';
import { LuBell, LuCircleCheckBig, LuShare2, LuBookmark, LuChevronDown, LuHeart } from 'react-icons/lu';
import styles from './EventCardMenu.module.scss';

interface EventCardMenuProps {
  onClose: () => void;
  title: string;
  date: string;
}

export default function EventCardMenu({ onClose, title, date }: EventCardMenuProps) {
  return (
    <div className={styles.cardMenu} onClick={(e) => e.stopPropagation()}>
      <div className={styles.menuHeader}>
        <div className={styles.headerInfo}>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        
        <button 
          className={styles.closeBtn} 
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          <LuChevronDown size={24} />
        </button>
      </div>

      <hr className={styles.divider} />

      <div className={styles.actionList}>
        <button className={styles.actionItem}>
          <LuHeart size={24} />
          <span>Me gusta</span>
        </button>

        <button className={styles.actionItem}>
          <LuBell size={24} />
          <span>Avisarme</span>
        </button>

        <button className={styles.actionItem}>
          <LuBookmark size={24} />
          <span>Guardar</span>
        </button>

        <button className={styles.actionItem}>
          <LuCircleCheckBig size={24} />
          <span>Asistí</span>
        </button>

        <button className={styles.actionItem}>
          <LuShare2 size={24} />
          <span>Compartir</span>
        </button>
      </div>
    </div>
  );
}
