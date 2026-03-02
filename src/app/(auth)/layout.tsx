import styles from './authLayout.module.scss';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.authLayout}>
      <main className={styles.authMain}>
        {children}
      </main>
    </div>
  );
}
