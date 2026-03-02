'use client';

import { useState } from 'react';
import Image from 'next/image';
import NavbarMenu from '../NavbarMenu';
import Overlay from '../Overlay';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: Conectar con auth real

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <Image 
              src="/logos/crow.svg" 
              alt="Crow Logo" 
              width={29} 
              height={29}
            />
          </div>

          {/* Buscador */}
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Buscar eventos..."
              className={styles.searchInput}
            />
          </div>

          {/* Menú Hamburguesa */}
          <button 
            className={styles.menuButton}
            onClick={handleMenuToggle}
            aria-label="Abrir menú"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
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
