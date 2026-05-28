import { db, type Room } from './db';

const rooms: Room[] = [...db];

export function getRooms(): Room[] {
  return rooms;
}

export function getRoom(roomId: string): Room | undefined {
  return rooms.find((room) => room.id === roomId);
}
