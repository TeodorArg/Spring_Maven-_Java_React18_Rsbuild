import { TPrice } from '@/shared';

export interface IProduct {
  /** Product ID: Five groups of digitals identifier, like 2a7f3a98-1ac9-46d5-94cb-5ec3e2b66428. */
  readonly id: string;
  /** Product title. */
  readonly name: string;
  /** Price in $00.00 format. */
  readonly price: TPrice;
}
