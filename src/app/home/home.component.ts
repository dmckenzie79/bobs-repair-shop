/**
 * Title: home.component.ts
 * Author: Diandra McKenzie
 * Date: 31 August 2020
 * Description: Home Component file
 */

import { Component, OnInit } from '@angular/core';
import { IService } from '../service.interface';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogInvoiceComponent } from '../dialog-invoice/dialog-invoice.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  services: IService;

  serviceRepairForm: FormGroup;

  serviceRepairOptions: Array<IService> = [
    {id: 1, title: "Password Reset", price: 39.99},
    {id: 2, title: "Spyware Removal", price: 99.99},
    {id: 3, title: "RAM Upgrade", price: 129.99},
    {id: 4, title: "Software Installation", price: 49.99},
    {id: 5, title: "Tune-Up", price: 89.99},
    {id: 6, title: "Keyboard Cleaning", price: 45.00},
    {id: 7, title: "Disk Clean-up", price: 149.99}
  ];



  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.serviceRepairForm = this.fb.group ({
      serviceRepairOptions: new FormArray([]),
      parts: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      labor: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  submit(serviceRepairForm) {
    const selectedServiceIds = [];
    for (const [key, value] of Object.entries(serviceRepairForm.services)) {
      if (value) {
        selectedServiceIds.push({
          id: key
        });
      }
    }

  }

  openDialog() {
    this.dialog.open(DialogInvoiceComponent);
  }

}
