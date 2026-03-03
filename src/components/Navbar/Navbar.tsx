'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import NavbarMenu from '../NavbarMenu';
import Overlay from '../Overlay';
import { useSearch } from '@/contexts/SearchContext';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: Conectar con auth real
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleExploreClick = () => {
    router.push('/explore');
  };

  const handleLogoClick = () => {
    router.push('/home');
    setSearchQuery(''); // Limpiar búsqueda al volver al home
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <div className={styles.logo} onClick={handleLogoClick}>
            <Image 
              src="/logos/crow.svg" 
              alt="Crow Logo" 
              width={29} 
              height={29}
            />
          </div>

          {/* Buscador y Botón Explorar */}
          <div className={`${styles.searchContainer} ${isSearchFocused ? styles.searchContainerFocused : ''}`}>
            <div className={`${styles.searchBar} ${isSearchFocused ? styles.searchBarFocused : ''}`}>
              <input 
                type="text" 
                placeholder="Buscar eventos..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {searchQuery && (
                <button 
                  className={styles.clearButton}
                  onMouseDown={(e) => {
                    e.preventDefault(); // Prevenir que el input pierda el foco
                    handleClearSearch();
                  }}
                  aria-label="Limpiar búsqueda"
                  type="button"
                >
                  {/* TODO: cambiar por iconos de librería que vamos a definir */}
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>

            <button 
              className={`${styles.exploreButton} ${isSearchFocused ? styles.exploreButtonHidden : ''}`}
              onClick={handleExploreClick}
              aria-label="Explorar"
            >
              {/* TODO: cambiar por iconos de librería que vamos a definir */}
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 122.88 78.5" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill="currentColor"
                  d="M50.57,17.2C40.73,10.31,31,8.79,20.94,11.42c2.2-5.29,5.51-8.76,9.4-10.39c5.51-2.31,14.53-0.67,18.08,4.27 C50.24,7.82,51.15,11.56,50.57,17.2L50.57,17.2z M83.52,55.32c-0.27-1.12,0.43-2.24,1.55-2.51c1.12-0.27,2.24,0.43,2.51,1.55 c0.54,2.27,1.47,4.03,2.71,5.3c1.27,1.29,2.9,2.12,4.84,2.5c1.13,0.22,1.86,1.31,1.64,2.44c-0.22,1.13-1.31,1.86-2.44,1.64 c-2.76-0.55-5.13-1.76-7-3.67C85.54,60.75,84.24,58.35,83.52,55.32L83.52,55.32z M13.54,55.32c-0.27-1.12,0.43-2.24,1.55-2.51 c1.12-0.27,2.24,0.43,2.51,1.55c0.54,2.27,1.47,4.03,2.71,5.3c1.27,1.29,2.9,2.12,4.84,2.5c1.13,0.22,1.86,1.31,1.64,2.44 c-0.22,1.13-1.31,1.86-2.44,1.64c-2.76-0.55-5.13-1.76-7-3.67C15.56,60.75,14.26,58.35,13.54,55.32L13.54,55.32z M61.3,47.71 c2.8,0,5.07,2.21,5.07,4.93c0,2.72-2.27,4.93-5.07,4.93c-2.8,0-5.07-2.21-5.07-4.93C56.23,49.92,58.5,47.71,61.3,47.71L61.3,47.71z M26.66,34.57c10,0,18.11,7.88,18.11,17.61c0,9.72-8.11,17.61-18.11,17.61c-10,0-18.11-7.88-18.11-17.61 C8.55,42.45,16.65,34.57,26.66,34.57L26.66,34.57z M96.64,34.57c10,0,18.11,7.88,18.11,17.61c0,9.72-8.11,17.61-18.11,17.61 c-10,0-18.11-7.88-18.11-17.61C78.53,42.45,86.63,34.57,96.64,34.57L96.64,34.57z M72.31,17.2c9.84-6.89,19.57-8.41,29.62-5.78 c-2.2-5.29-5.51-8.76-9.4-10.39C87.02-1.28,78,0.36,74.46,5.3C72.64,7.82,71.73,11.56,72.31,17.2L72.31,17.2z M107.57,17.4 c-3.42-3.52-8.96-5.11-16.63-4.77c-8.69,0.43-17.87,4.06-20.82,12.29c-2.47-5.42-14.89-5.42-17.35,0 c-2.95-8.23-12.13-11.87-20.82-12.29c-7.67-0.34-13.2,1.26-16.63,4.77C10.5,23.86,0.96,40.74,0.16,48.99 C-3.1,82.47,44.92,90.87,52.62,56.3c4.37,7.75,13.27,7.75,17.64,0c7.7,34.58,55.72,26.17,52.46-7.31 C121.92,40.74,112.38,23.86,107.57,17.4L107.57,17.4z"
                />
              </svg>
            </button>
          </div>

          {/* Menú Hamburguesa */}
          <button 
            className={styles.menuButton}
            onClick={handleMenuToggle}
            aria-label="Abrir menú"
          >
            {/* TODO: cambiar por iconos de librería que vamos a definir */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <Overlay onClick={handleMenuClose} />
          <NavbarMenu
            onClose={handleMenuClose}
            isLoggedIn={isLoggedIn}
          />
        </>
      )}
    </>
  );
}
