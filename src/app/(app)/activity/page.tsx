import { LuHeart, LuBell, LuBookmark, LuCircleCheck } from 'react-icons/lu';
import ActivityEventList from '@/components/ActivityEventList';
import type { EventGridItem } from '@/components/EventsGrid';
import { mockEvents } from '@/data/mockEvents';
import styles from './activity.module.scss';

type ActivityTab = 'likes' | 'notify' | 'save' | 'attend';

const TAB_CONFIG: Record<ActivityTab, { icon: React.ReactNode; empty: string }> = {
  likes:  { icon: <LuHeart size={40} />,       empty: 'Todavía no le diste me gusta a ningún evento.' },
  notify: { icon: <LuBell size={40} />,        empty: 'No tenés ningún evento con aviso activado.'    },
  save:   { icon: <LuBookmark size={40} />,    empty: 'No guardaste ningún evento todavía.'           },
  attend: { icon: <LuCircleCheck size={40} />, empty: 'Aún no marcaste ningún evento como asistido.'  },
};

// TODO: reemplazar con datos reales del usuario según el tab
const MOCK_USER_EVENTS: Record<ActivityTab, EventGridItem[]> = {
  likes:  mockEvents.slice(0, 3).map((e) => ({ id: e._id, title: e.title, date: e.schedule.date_start, venue: e.detail?.venue || e.detail?.address || 'Ubicación por confirmar', imageUrl: e.media.imgs[0] })),
  notify: mockEvents.slice(2, 4).map((e) => ({ id: e._id, title: e.title, date: e.schedule.date_start, venue: e.detail?.venue || e.detail?.address || 'Ubicación por confirmar', imageUrl: e.media.imgs[0] })),
  save:   mockEvents.slice(4, 7).map((e) => ({ id: e._id, title: e.title, date: e.schedule.date_start, venue: e.detail?.venue || e.detail?.address || 'Ubicación por confirmar', imageUrl: e.media.imgs[0] })),
  attend: mockEvents.slice(1, 5).map((e) => ({ id: e._id, title: e.title, date: e.schedule.date_start, venue: e.detail?.venue || e.detail?.address || 'Ubicación por confirmar', imageUrl: e.media.imgs[0] })),
};

export default async function ActivityPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const { tab: rawTab } = await searchParams;
  const tab = (rawTab ?? 'likes') as ActivityTab;
  const current = TAB_CONFIG[tab] ?? TAB_CONFIG.likes;
  const events = MOCK_USER_EVENTS[tab] ?? [];

  return (
    <main className={styles.activityPage}>
      {events.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>{current.icon}</div>
          <p className={styles.emptyText}>{current.empty}</p>
        </div>
      ) : (
        <ActivityEventList events={events} />
      )}
    </main>
  );
}
