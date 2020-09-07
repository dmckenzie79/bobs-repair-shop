/**
 * Title: dialog-invoice.component.ts
 * Author: Professor Krasso
 * Date: 4 September 2020
 * Modified By: Diandra McKenzie
 * Description: Dialog-Invoice Component file
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { serviceInvoice } from '../invoice.interface';

@Component({
  selector: 'app-dialog-invoice',
  templateUrl: './dialog-invoice.component.html',
  styleUrls: ['./dialog-invoice.component.scss']
})
export class DialogInvoiceComponent implements OnInit {

  invoice: any;
  serviceInvoice: Array<serviceInvoice>;

  constructor(private dialog: MatDialogRef<DialogInvoiceComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.invoice = data.invoice;
    this.dialog = dialog;
  }

  ngOnInit(): void {
  }

}
