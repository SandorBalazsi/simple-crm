import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';





@Component({
  selector: 'app-user',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user: User = new User();

constructor(public dialog: MatDialog){
}

openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      width: '500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
      if (result) {
        console.log('Received user data:', result);
        // Here you could add the user to a list or send to Firebase
        this.user = result;
      }
    });
  }
}


