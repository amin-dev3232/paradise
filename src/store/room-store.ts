import { Room } from '@/lib/db';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Reservations {
  room: Room;
  date: string[];
}

interface RoomStore {
  reservations: Reservations[];

  addReservation: (newReserved: Reservations) => void;

  removeReservation: (roomId: string) => void;

  clearAll: () => void;
}

export const useRoomStore = create<RoomStore>()(
  persist(
    (set) => ({
      // state
      reservations: [],

      // actions
      addReservation(newReserved: Reservations) {
        set((state) => ({ reservations: [...state.reservations, newReserved] }));
      },

      removeReservation(roomId: string) {
        set((state) => ({ reservations: state.reservations.filter((r) => r.room.id !== roomId) }));
      },

      clearAll() {
        set({ reservations: [] });
      },
    }),
    { name: 'room-store' }
  )
);
