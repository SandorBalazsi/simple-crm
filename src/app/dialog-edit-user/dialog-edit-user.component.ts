import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-edit-user',
  imports: [MatDialogModule, MatProgressBarModule, MatInputModule, CommonModule, MatDatepickerModule, FormsModule, MatButtonModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.css'
})
export class DialogEditUserComponent {
  user!: User;
  birthDate!: Date;
  loading: boolean = false;
  
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>){}

  saveUser(){

  }

  onCancel(){

  }
  
}
