'use client';

import { useRouter } from 'next/navigation';
import styles from './EventNotFound.module.scss';

export default function EventNotFound() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.svgWrapper}>
        <svg viewBox="0 0 400 400" className={styles.svg} xmlns="http://www.w3.org/2000/svg">

          <ellipse cx="200" cy="365" rx="100" ry="10" fill="#1a1a1a" className={styles.shadow} />

          <g className={styles.sceneGroup}>

            {/* Ticket */}
            <path d="M 120 282 A 18 18 0 0 1 120 318 L 120 350 L 280 350 L 270 333 L 285 316 L 270 300 L 285 283 L 270 266 L 280 250 L 120 250 Z"
              fill="#1c1c1e" stroke="#E12C2C" strokeWidth="4" strokeLinejoin="round" />
            <line x1="150" y1="256" x2="150" y2="344" stroke="#E12C2C" strokeWidth="3" strokeDasharray="6 6" opacity="0.4" />
            <text x="165" y="280" fill="#94a3b8" fontFamily="sans-serif" fontWeight="bold" fontSize="14" letterSpacing="2">TICKET</text>
            <rect x="165" y="295" width="70" height="6" rx="3" fill="#cbd5e1" />
            <rect x="165" y="310" width="45" height="6" rx="3" fill="#cbd5e1" />
            <rect x="165" y="325" width="55" height="6" rx="3" fill="#cbd5e1" />

            {/* El Cuervo */}
            <g className={styles.crow}>
              <path className={styles.angryWing}
                d="M 195 170 C 170 130 140 125 110 140 C 130 155 160 170 185 185 Z"
                fill="#111827" />

              <defs>
                <mask id="wing-mask">
                  <rect x="0" y="0" width="400" height="400" fill="white" />
                  <g className={styles.gapGroup}>
                    <path d="M 190 170 Q 210 190 145 220 Q 185 205 190 170 Z" fill="black" />
                  </g>
                </mask>
              </defs>

              <path d="M 185 212 L 180 240 L 170 240 M 180 240 L 190 240"
                stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              <path mask="url(#wing-mask)"
                d="M 215 140 C 225 140 228 145 232 148 C 240 148 245 150 250 152 L 252 154 L 245 156 C 238 156 235 158 232 160 C 240 170 240 190 220 208 C 205 218 190 216 175 212 C 155 218 135 230 125 235 L 123 232 C 145 210 160 195 170 185 C 185 170 195 145 215 140 Z"
                fill="#111827" />

              <path d="M 205 210 L 200 240 L 190 240 M 200 240 L 210 240"
                stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              <circle className={styles.crowEye} cx="222" cy="148" r="3" fill="#E12C2C" />
            </g>

            <text x="260" y="110" fill="#E12C2C" fontSize="44" fontFamily="sans-serif" fontWeight="900" className={styles.qmark}>?</text>
            <text x="160" y="80" fill="#E12C2C" fontSize="34" fontFamily="sans-serif" fontWeight="900" className={`${styles.qmark} ${styles.qmark2}`}>?</text>

          </g>
        </svg>
      </div>

      <h1 className={styles.title}>Evento no encontrado</h1>
      <p className={styles.description}>El evento que buscas no existe o fue eliminado.</p>

      <button className={styles.backButton} onClick={() => router.push('/home')}>
        Volver a la cartelera
      </button>
    </div>
  );
}
