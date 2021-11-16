import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogglerService {
  brand = 'Rvs';
  helpDeskNumber = '0777464655';
  toggled = false;
  loader = false;
  simpleLoader = false;

  supplierId: any = undefined;
  depreciationTypes = [
    {
      id: 1,
      name: 'Reducing Balance'
    },
    {
      id: 2,
      name: 'Straight Line'
    }
  ];
  accountTypes = [
    {
      id: 1,
      name: 'Fixed Asset'
    },
    {
      id: 2,
      name: 'Current Asset'
    },
    {
      id: 3,
      name: 'Expenses'
    },
    {
      id: 4,
      name: 'Liability'
    },
    {
      id: 5,
      name: 'Account Payable'
    },
    {
      id: 6,
      name: 'Account Receivable'
    },
    {
      id: 7,
      name: 'Cost of good sold'
    },
  ];
  assetTypes = [
    {
      id: 1,
      name: 'Fixed Asset'
    },
    {
      id: 2,
      name: 'Current Asset'
    }
  ];
  activatedUrl = false;
  sideBarToggle = {
    accounting: false,
    sales: false,
    purchases: false,
    items: false,
    reports: false,
    revenue: false,
    settings: false,
    extras: false,
  };
 
  sideToggle(menu:String): void {
    console.log(menu)
    this.sideBarToggle.accounting ? this.sideBarToggle.accounting = false : this.sideBarToggle.accounting= true;
  }
  
  constructor() { }
 
}
