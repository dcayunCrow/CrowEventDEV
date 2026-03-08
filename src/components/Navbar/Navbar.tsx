'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { LuArrowLeft } from 'react-icons/lu';
import { MdMenu } from 'react-icons/md';
import NavbarMenu from '../NavbarMenu';
import Overlay from '../Overlay';
import SearchBar from '../SearchBar';
import ViewModeSelector from '../ViewModeSelector';
import { useSearch } from '@/contexts/SearchContext';
import { getCategoryById } from '@/data/mockCategories';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { setSearchQuery } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: Conectar con auth real

  // Detectar variante de navbar
  const isExplorePage = pathname === '/explore';
  const isCategoryPage = pathname.startsWith('/explore/') && pathname !== '/explore';

  const categoryId = isCategoryPage ? pathname.replace('/explore/', '') : null;
  const category = categoryId ? getCategoryById(categoryId) : null;
  const pageTitle = isExplorePage ? 'Explorar' : (category?.title ?? 'Categoría');
  const backDestination = isExplorePage ? '/home' : '/explore';

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);
  const handleExploreClick = () => router.push('/explore');
  const handleLogoClick = () => {
    router.push('/home');
    setSearchQuery('');
  };

  return (
    <>
      <nav className={`${styles.navbar} ${(isExplorePage || isCategoryPage) ? styles.navbarExplore : ''}`}>

        {isExplorePage ? (
          // ── /explore: dos filas sin buscador ──
          <div className={styles.navbarExploreContent}>
            <div className={styles.topRow}>
              <div className={styles.logo} onClick={handleLogoClick}>
                <Image src="/logos/crow.svg" alt="Crow Logo" width={29} height={29} />
              </div>
              <button className={styles.menuButton} onClick={handleMenuToggle} aria-label="Abrir menú">
                <MdMenu size={28} />
              </button>
            </div>
            <div className={styles.bottomRow}>
              <button className={styles.backButton} onClick={() => router.push(backDestination)} aria-label="Volver">
                <LuArrowLeft size={24} strokeWidth={2.5} />
              </button>
              <h1 className={styles.pageTitle}>{pageTitle}</h1>
            </div>
          </div>

        ) : isCategoryPage ? (
          // ── /explore/[id]: dos filas CON buscador ──
          <div className={styles.navbarExploreContent}>
            <div className={styles.topRow}>
              <div className={styles.logo} onClick={handleLogoClick}>
                <Image src="/logos/crow.svg" alt="Crow Logo" width={29} height={29} />
              </div>
              <SearchBar variant="category" categoryId={categoryId ?? undefined} />
              <button className={styles.menuButton} onClick={handleMenuToggle} aria-label="Abrir menú">
                <MdMenu size={28} />
              </button>
            </div>
            <div className={styles.bottomRow}>
              <button className={styles.backButton} onClick={() => router.push(backDestination)} aria-label="Volver">
                <LuArrowLeft size={24} strokeWidth={2.5} />
              </button>
              <h1 className={styles.pageTitle}>{pageTitle}</h1>
              <ViewModeSelector />
            </div>
          </div>

        ) : (
          // ── Default (home / resto) ──
          <div className={styles.navbarContent}>
            <div className={styles.logo} onClick={handleLogoClick}>
              <Image src="/logos/crow.svg" alt="Crow Logo" width={29} height={29} />
            </div>
            <SearchBar variant="default" onExploreClick={handleExploreClick} />
            <button className={styles.menuButton} onClick={handleMenuToggle} aria-label="Abrir menú">
              <MdMenu size={28} />
            </button>
          </div>
        )}

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
