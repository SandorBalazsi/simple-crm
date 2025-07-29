import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule]
})
export class DetailComponent implements OnInit{

  userId = '';
  user: User = new User();

  constructor(private route:ActivatedRoute,
     private firebaseService: FirebaseService,
     public dialog: MatDialog
   ){

  }

async ngOnInit() {
  this.route.paramMap.subscribe(async paraMap => {
    this.userId = paraMap.get('id') ?? '';
    this.user = await this.firebaseService.getUser(this.userId) ?? new User();
    console.log('Retrieved user', this.user);
  });
}


editAddress(){
   const dialog = this.dialog.open(DialogEditAddressComponent, {
      width: '500px'
    });
    dialog.componentInstance.user = this.user;

}

editUser(){
  const dialog = this.dialog.open(DialogEditUserComponent, {
      width: '500px'
    });
    dialog.componentInstance.user = this.user;
}


}
