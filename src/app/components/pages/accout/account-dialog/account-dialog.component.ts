import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { DialogData } from '../interfaces/DialogData';
@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit{

 
  datas!:DialogData
   datass:DialogData;
   
    constructor(
       
        private dialogRef: MatDialogRef<AccountDialogComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
       ) {

       this.datass=data;
       
    }
  ngOnInit(): void {
    console.log(this.data)
  }

    
    onNoClick(): void {
      this.dialogRef.close();
    }
    

}
