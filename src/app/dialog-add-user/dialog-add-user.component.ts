import { Component } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-dialog-add-user',
  imports: [MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.css'
})
export class DialogAddUserComponent {

}
