'use client';

import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import styles from './AccordionItem.module.scss';

export interface AccordionItemProps {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionItem({
  title,
  icon,
  children,
  defaultOpen = false
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const isExpandable = Boolean(children);

  const toggleAccordion = () => {
    if (isExpandable) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.isOpen : ''}`}>
      
      <button
        className={`${styles.accordionHeader} ${isExpandable ? styles.isExpandable : ''}`}
        onClick={toggleAccordion}
        type="button"
        aria-expanded={isExpandable ? isOpen : undefined} 
      >
        {icon && <span className={styles.headerIcon}>{icon}</span>}
        
        <h4 className={styles.headerTitle}>{title}</h4>
        
        {isExpandable && (
          <span className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}>
            <LuChevronDown size={20} />
          </span>
        )}
      </button>

      {isExpandable && isOpen && (
        <div className={styles.accordionContent}>
          {children}
        </div>
      )}
      
    </div>
  );
}
