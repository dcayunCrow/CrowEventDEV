'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { LuArrowLeft, LuBookmark, LuShare2 } from 'react-icons/lu';
import { MdMenu } from 'react-icons/md';
import NavbarMenu from '../NavbarMenu';
import Overlay from '../Overlay';
import SearchBar from '../SearchBar';
import ViewModeSelector from '../ViewModeSelector';
import FilterBar from '../FilterBar';
import ActivityTabs from '../ActivityTabs';
import type { ActivityTab } from '../ActivityTabs';
import { useSearch } from '@/contexts/SearchContext';
import { getCategoryById } from '@/data/mockCategories';
import { getRecommendedListByRowId } from '@/data/mockRecommendedEvents';
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
  const isFeedPage = pathname.startsWith('/feed/');
  const isEventPage = pathname.startsWith('/event/');
  const isActivityPage = pathname === '/activity';

  const searchParams = useSearchParams();
  const activeTab = isActivityPage ? (searchParams.get('tab') ?? 'likes') : null;

  const categoryId = isCategoryPage ? pathname.replace('/explore/', '') : null;
  const category = categoryId ? getCategoryById(categoryId) : null;

  const feedRowId = isFeedPage ? pathname.replace('/feed/', '') : null;
  const feedList = feedRowId ? getRecommendedListByRowId(feedRowId) : null;

  const pageTitle = isExplorePage
    ? 'Explorar'
    : isFeedPage
    ? (feedList?.title ?? 'Recomendados')
    : (category?.title ?? 'Categoría');
  const backDestination = (isExplorePage || isFeedPage) ? '/home' : '/explore';

  const handleBookmark = () => {
    // TODO: conectar con lógica de guardado
  };

  const handleShare = async () => {
    try {
      await navigator.share({ url: window.location.href });
    } catch {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);
  const handleExploreClick = () => router.push('/explore');
  const handleLogoClick = () => {
    router.push('/home');
    setSearchQuery('');
  };

  return (
    <>
      <nav className={`${styles.navbar}`}>

        {isEventPage ? (
          // ── /event/[id]: dos filas — logo+menu | back + bookmark + share ──
          <div className={styles.navbarContent}>
            <div className={styles.topRow}>
              <div className={styles.logo} onClick={handleLogoClick}>
                <Image src="/logos/crow.svg" alt="Crow Logo" width={29} height={29} />
              </div>
              <button className={styles.menuButton} onClick={handleMenuToggle} aria-label="Abrir menú">
                <MdMenu size={28} />
              </button>
            </div>
            <div className={styles.bottomRow}>
              <button className={styles.backButton} onClick={() => router.back()} aria-label="Volver">
                <LuArrowLeft size={20} strokeWidth={2.5} />
              </button>
              <div className={styles.eventActions}>
                <button className={styles.actionButton} onClick={handleBookmark} aria-label="Guardar evento">
                  <LuBookmark size={20} strokeWidth={2} />
                </button>
                <button className={styles.actionButton} onClick={handleShare} aria-label="Compartir evento">
                  <LuShare2 size={20} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

        ) : isActivityPage ? (
          // ── /activity: logo+título centrado+menu | 4 tabs ──
          <div className={styles.navbarContent}>
            <div className={styles.topRowActivity}>
              <div className={styles.logo} onClick={handleLogoClick}>
                <Image src="/logos/crow.svg" alt="Crow Logo" width={29} height={29} />
              </div>
              <h1 className={styles.activityTitle}>Mi Actividad</h1>
              <button className={styles.menuButton} onClick={handleMenuToggle} aria-label="Abrir menú">
                <MdMenu size={28} />
              </button>
            </div>
            <ActivityTabs activeTab={(activeTab as ActivityTab) ?? 'likes'} />
          </div>

        ) : isExplorePage ? (
          // ── /explore: dos filas sin buscador ──
          <div className={styles.navbarContent}>
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
                <LuArrowLeft size={20} strokeWidth={2.5} />
              </button>
              <h1 className={styles.pageTitle}>{pageTitle}</h1>
            </div>
          </div>

        ) : isFeedPage ? (
          // ── /feed/[rowId]: dos filas sin buscador + ViewModeSelector ──
          <div className={styles.navbarContent}>
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
                <LuArrowLeft size={20} strokeWidth={2.5} />
              </button>
              <h1 className={styles.pageTitle}>{pageTitle}</h1>
              <ViewModeSelector />
            </div>
          </div>

        ) : isCategoryPage ? (
          // ── /explore/[id]: dos filas CON buscador ──
          <div className={styles.navbarContent}>
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
                <LuArrowLeft size={20} strokeWidth={2.5} />
              </button>
              <h1 className={styles.pageTitle}>{pageTitle}</h1>
              <ViewModeSelector />
            </div>
          </div>

        ) : (
          // ── Default (home / resto) ──
          <div className={styles.navbarContent}>
            <div className={styles.topRow}>
              <div className={styles.logo} onClick={handleLogoClick}>
                <Image src="/logos/crow.svg" alt="Crow Logo" width={29} height={29} />
              </div>
              <SearchBar variant="default" onExploreClick={handleExploreClick} />
              <button className={styles.menuButton} onClick={handleMenuToggle} aria-label="Abrir menú">
                <MdMenu size={28} />
              </button>
            </div>
            <FilterBar />
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
