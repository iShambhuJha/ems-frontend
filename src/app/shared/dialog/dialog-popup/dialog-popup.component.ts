import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {

  constructor( private dialogRef:MatDialogRef<DialogPopupComponent>) {  }

  ngOnInit(): void {
  }

  clickYes(){
    this.dialogRef.close({event: 'YES'});
  }

  clickCencel(){
    this.dialogRef.close(true);
  }

}
