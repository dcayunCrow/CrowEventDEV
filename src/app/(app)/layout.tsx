import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SearchProvider } from '@/contexts/SearchContext';
import styles from './appLayout.module.scss';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
      <div className={styles.appLayout}>
        <Navbar />
        <main className={styles.appMain}>
          {children}
        </main>
        <Footer />
      </div>
    </SearchProvider>
  );
}
