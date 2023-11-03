export interface Celebration {
  _id?: string;
  donatedBy: string;
  idempotencyKey?: string;
  payment_intent?: string;
  twitter: string | null;
  resolved?: boolean;
  defunct?: boolean;
  donation: number;
  pol_name: string;
  createdAt?: Date;
  updatedAt?: Date;
  bill_id: string;
  FEC_id: string;
  pol_id: string;
  fee?: number;
  tip: number;
}
