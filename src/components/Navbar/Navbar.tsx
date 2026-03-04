'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { LuX } from 'react-icons/lu';
import { MdMenu } from 'react-icons/md';
import BinocularsIcon from '@/assets/icons/BinocularsIcon';
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
                  <LuX size={16} />
                </button>
              )}
            </div>

            <button 
              className={`${styles.exploreButton} ${isSearchFocused ? styles.exploreButtonHidden : ''}`}
              onClick={handleExploreClick}
              aria-label="Explorar"
            >
              <BinocularsIcon size={20} />
              <p>Explorar</p>
            </button>
          </div>

          {/* Menú Hamburguesa */}
          <button 
            className={styles.menuButton}
            onClick={handleMenuToggle}
            aria-label="Abrir menú"
          >
            <MdMenu size={28} />
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
