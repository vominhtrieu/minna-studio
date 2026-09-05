import { useMemo, useSyncExternalStore } from 'react';
import type { Lesson } from './lessons';
export type Rating = 'known' | 'review';
type Snapshot = {
  ratings: Record<string, Rating>;
  ready: boolean;
  storageWarning: boolean;
};
const serverSnapshot: Snapshot = {
  ratings: {},
  ready: false,
  storageWarning: false,
};
export function parseRatings(
  raw: string | null,
  allowedIds: readonly string[],
): Record<string, Rating> {
  const value = JSON.parse(raw ?? '{}');
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(
      ([id, status]) =>
        allowedIds.includes(id) && (status === 'known' || status === 'review'),
    ),
  ) as Record<string, Rating>;
}
function createProgressStore(lesson: Lesson) {
  const key = `minna-studio:v1:words:${lesson.id}`;
  const ids = lesson.words.map((w) => w.id);
  const listeners = new Set<() => void>();
  function load(): Snapshot {
    if (typeof window === 'undefined') return serverSnapshot;
    try {
      return {
        ratings: parseRatings(localStorage.getItem(key), ids),
        ready: true,
        storageWarning: false,
      };
    } catch {
      return { ratings: {}, ready: true, storageWarning: true };
    }
  }
  let snapshot = load();
  return {
    getSnapshot: () => snapshot,
    getServerSnapshot: () => serverSnapshot,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      function onStorage(event: StorageEvent) {
        if (event.key === key || event.key === null) {
          snapshot = load();
          listeners.forEach((fn) => fn());
        }
      }
      window.addEventListener('storage', onStorage);
      return () => {
        listeners.delete(listener);
        window.removeEventListener('storage', onStorage);
      };
    },
    rate: (id: string, rating: Rating) => {
      if (!ids.includes(id)) return;
      snapshot = {
        ...snapshot,
        ratings: { ...snapshot.ratings, [id]: rating },
      };
      try {
        localStorage.setItem(key, JSON.stringify(snapshot.ratings));
        snapshot = { ...snapshot, storageWarning: false };
      } catch {
        snapshot = { ...snapshot, storageWarning: true };
      }
      listeners.forEach((fn) => fn());
    },
  };
}
export function useWordProgress(lesson: Lesson) {
  const store = useMemo(() => createProgressStore(lesson), [lesson]);
  const snapshot = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot,
  );
  return { ...snapshot, saveRating: store.rate };
}
