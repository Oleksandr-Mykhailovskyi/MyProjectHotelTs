export interface Room {
  id: number;
  price: number;
  reservedFrom: string;
  reservedUntil: string;
  roomNumber: number;
  howManyPeople: number;
  breakfast: boolean;
  isFree: boolean;
  isReady: boolean;
}
