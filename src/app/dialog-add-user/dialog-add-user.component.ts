import { Component } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-dialog-add-user',
  imports: [FormsModule, MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.css'
})
export class DialogAddUserComponent {

    constructor() {
    console.log('DialogAddUserComponent loaded');
  }

    user: User = new User();
    birthDate!: Date;

saveUser() {
  if (this.birthDate) {
    this.user.birthDate = this.birthDate.getTime();
  } else {
    this.user.birthDate = 0; 
  }
  console.log('Current User is', this.user);
}
}
