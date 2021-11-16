import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AccountDialogComponent } from './account-dialog/account-dialog.component';
@Component({
  selector: 'app-accout',
  templateUrl: './accout.component.html',
  styleUrls: ['./accout.component.css']
})
export class AccoutComponent {
  animal!: string;
  name!: string;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
    
      return [
        { title: 'Card 1', cols: 2, rows: 2},
       
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) {}
  openDialog(): void {
   this.name="medy"
   this.animal="hello"
    const dialogRef = this.dialog.open(AccountDialogComponent,{
      width: '450px',
      data: {name: this.name, animal: this.animal},
    },);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
