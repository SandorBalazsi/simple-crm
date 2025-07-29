import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  imports: [
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.css',
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate!: Date;
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firebaseService: FirebaseService
  ) {
    console.log('DialogAddUserComponent loaded');
  }

  async saveUser() {
    console.log('saveUser method called!');

    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
    } else {
      this.user.birthDate = 0;
    }

    console.log('Current User is', this.user);
    this.loading = true;

    try {
      const userId = await this.firebaseService.addUser(this.user);
      console.log('User saved to Firebase with ID:', userId);
      this.user.userId = userId;
      this.dialogRef.close(this.user);
    } catch (error: any) {
      console.error('Error saving user:', error);
      // You could show an error message to the user here
    }

    this.loading = false;
  }

  onCancel() {
    this.dialogRef.close();
  }
}
