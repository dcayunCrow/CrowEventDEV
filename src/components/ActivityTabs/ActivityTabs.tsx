'use client';

import { useRouter } from 'next/navigation';
import { LuHeart, LuBell, LuBookmark, LuCircleCheck } from 'react-icons/lu';
import styles from './ActivityTabs.module.scss';

export type ActivityTab = 'likes' | 'notify' | 'save' | 'attend';

interface ActivityTabsProps {
  activeTab: ActivityTab;
}

const TABS: { tab: ActivityTab; icon: React.ReactNode; label: string }[] = [
  { tab: 'likes',  icon: <LuHeart size={20} />,       label: 'Me gusta' },
  { tab: 'notify', icon: <LuBell size={20} />,        label: 'Avisarme' },
  { tab: 'save',   icon: <LuBookmark size={20} />,    label: 'Guardar'  },
  { tab: 'attend', icon: <LuCircleCheck size={20} />, label: 'Asistí'   },
];

export default function ActivityTabs({ activeTab }: ActivityTabsProps) {
  const router = useRouter();

  return (
    <div className={styles.tabRow}>
      {TABS.map(({ tab, icon, label }) => (
        <button
          key={tab}
          className={`${styles.tabButton} ${activeTab === tab ? styles.tabButtonActive : ''}`}
          onClick={() => router.push(`/activity?tab=${tab}`)}
        >
          {icon}
          <span data-label={label}>{label}</span>
        </button>
      ))}
    </div>
  );
}
