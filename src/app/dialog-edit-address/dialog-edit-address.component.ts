import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-edit-address',
  imports: [MatDialogModule, MatProgressBarModule, MatInputModule, CommonModule, FormsModule, MatButtonModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.css'
})
export class DialogEditAddressComponent {

  user: User | undefined;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>){}


  saveUser(){

  }

  onCancel(){

  }
}
