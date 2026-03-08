'use client';

import { useState } from 'react';
import { LuX } from 'react-icons/lu';
import BinocularsIcon from '@/assets/icons/BinocularsIcon';
import { useSearch } from '@/contexts/SearchContext';
import { getCategoryById } from '@/data/mockCategories';
import styles from './SearchBar.module.scss';

export type SearchBarVariant = 'default' | 'category';

export interface SearchBarProps {
  /** 
   * default  → home/resto: buscador global + botón Explorar
   * category → explore/[id]: filtra eventos de la categoría
   */
  variant?: SearchBarVariant;
  /** Sólo variant="default": callback para navegar a /explore */
  onExploreClick?: () => void;
  /** Sólo variant="category": id de la categoría activa (para el futuro endpoint) */
  categoryId?: string;
  placeholder?: string;
}

export default function SearchBar({
  variant = 'default',
  onExploreClick,
  categoryId,
  placeholder,
}: SearchBarProps) {
  const { searchQuery, setSearchQuery } = useSearch();
  const [isFocused, setIsFocused] = useState(false);

  const category = variant === 'category' && categoryId ? getCategoryById(categoryId) : null;
  const resolvedPlaceholder =
    placeholder ??
    (variant === 'category' && category ? `Buscar en ${category.title}` : 'Buscar eventos...');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // TODO (variant="category"): cuando tengamos el endpoint, disparar
    // fetchEventsByCategory(categoryId, e.target.value) en lugar de setSearchQuery global
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className={`${styles.searchContainer} ${isFocused ? styles.focused : ''}`}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder={resolvedPlaceholder}
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchQuery && (
          <button
            className={styles.clearButton}
            onMouseDown={(e) => {
              e.preventDefault(); // evitar que el input pierda el foco
              handleClear();
            }}
            aria-label="Limpiar búsqueda"
            type="button"
          >
            <LuX size={16} />
          </button>
        )}
      </div>

      {variant === 'default' && (
        <button
          className={`${styles.exploreButton} ${isFocused ? styles.exploreButtonHidden : ''}`}
          onClick={onExploreClick}
          aria-label="Explorar"
        >
          <BinocularsIcon size={20} />
          <p>Explorar</p>
        </button>
      )}
    </div>
  );
}
