import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import {ContactInfoInterface} from '../../models/contact-info-interface';
import {DocumentInfoInterface} from '../../models/document-user-interface';
import {AppUserInterface} from '../../models/app-user-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataApi: DataApiService,private location:Location) { }
// app user
  Name: any;
  LastName: any;
  IsMilitar: any;
  TimeCreate: any = '2019-09-15T17:58:51.042Z';
  IsTemporal: any;
  username: any;
  password: any;
  email: any;
  emailVerified: any;
  verificationToken: any = '2234';
  newUser: any;
  id_new_user: any;

// concat info
  Address: any;
  City: any;
  Phone: any;
  CelPhone: any;
  EmergencyName: any;
  EmergencyPhone: any;
  CountryId: any = 100;
  UserId: any;
  // doc
  Document: any;
  placeExpedition: any;
  dateExpedition: any;
  TypeDocumentId: any;
  ngOnInit() {

  }
  saveNewUser() {
    const UserData = {
      Name : this.Name,
      LastName: this.LastName,
      IsMilitar: this.IsMilitar,
      TimeCreate: this.TimeCreate,
      IsTemporal: this.IsTemporal,
      username: this.username,
      password: this.password,
      email: this.email,
      emailVerified: this.emailVerified,
      verificationToken: this.verificationToken
    };
    this.dataApi.saveAppUser(UserData).subscribe(user => {
      this.newUser = user;
      this.id_new_user = this.newUser.id;
      const UserContactInfo = {
        Address : this.Address,
        City: this.City,
        Phone: this.Phone,
        CelPhone: this.CelPhone,
        EmergencyName: this.EmergencyName,
        EmergencyPhone: this.EmergencyPhone,
        CountryId: this.CountryId,
        UserId: this.id_new_user
      };
      this.dataApi.saveContactInfo(UserContactInfo).subscribe(userContactInfo => console.log(userContactInfo));
      const UserDocument = {
        Document : this.Document,
        placeExpedition: this.placeExpedition,
        dateExpedition: this.dateExpedition,
        TypeDocumentId: this.TypeDocumentId,
        UserId: this.id_new_user
      };
      this.dataApi.saveUserDocument(UserDocument).subscribe(userDocument =>  console.log(userDocument));

    });
   //location.reload();
  }
  saveUserData(User: NgForm): void{
    this.dataApi.saveAppUser(User.value).subscribe(user => location.reload());
  }
  saveContactInfo(UserContactInfo: NgForm): void{
    this.dataApi.saveContactInfo(UserContactInfo.value).subscribe(userContactInfo => location.reload());
  }
  saveUserDocument(UserDocument: NgForm): void{
    this.dataApi.saveUserDocument(UserDocument.value).subscribe(userDocument => location.reload());
  }

}
