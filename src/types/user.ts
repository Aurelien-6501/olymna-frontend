// src/types/user.ts

import { Reservation } from "./reservation";

export type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role?: {
    id: number;
    name: string;
    description?: string;
    type?: string;
  };
  reservations?: Reservation[];
  prenom?: string;
  nom?: string;
  createdAt?: string;
  updatedAt?: string;
};
