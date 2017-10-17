import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'pa-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public snackBarMessage: MatSnackBar) { }

  ngOnInit() {
    console.log('init snack bar');
  }
  onMessageSnackBar( message: string , action: string ): void {
    this.snackBarMessage.open(message, action, {
      duration: 2000
    });
  }
}
