import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchProvider } from '@/contexts/SearchContext';
import { ViewModeProvider } from '@/contexts/ViewModeContext';
import styles from './appLayout.module.scss';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
    <ViewModeProvider>
      <div className={styles.appLayout}>
        <Navbar />
        <main className={styles.appMain}>
          {children}
        </main>
        <Footer />
      </div>
    </ViewModeProvider>
    </SearchProvider>
  );
}
