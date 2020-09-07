/**
 * Title: service.interface.ts
 * Author: Professor Krasso
 * Date: 4 September 2020
 * Modified By: Diandra McKenzie
 * Description: Service Interface file
 */

import { IService } from './service.interface';

export interface serviceInvoice {
  lineItems :Array<IService>;
  partsAmount: number;
  laborAmount: number;
  orderDate: string;

 }
