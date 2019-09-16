import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';
import { map} from 'rxjs/operators';
import { ContactInfoInterface } from '../models/contact-info-interface';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor( private http: HttpClient) {
  }
  getAllUsers(){
    const url_api = 'http://localhost:3000/api/AppUser_TBs';
    return this.http.get(url_api);
  }
  getUserById(id: string){
    const url_api = 'http://localhost:3000/api/AppUser_TBs/';
    return this.http.get(url_api + id);
  }
  getDocumentByUser(id: string){
    const url_api = 'http://localhost:3000/api/UserDocument_TBs/';
    return this.http.get(url_api + id);
  }
  getContactInfoByUser(id: string){
    const url_api = 'http://localhost:3000/api/ContactInfo_TBs/';
    return this.http.get(url_api + id);
  }
  saveUserDocument(data){
    const url_api = 'http://localhost:3000/api/UserDocument_TBs';
    return this.http.post(url_api, data).pipe(map(data => data));
  }
  saveContactInfo(data){
    const url_api = 'http://localhost:3000/api/ContactInfo_TBs';
    return this.http.post(url_api, data).pipe(map(data => data));
  }
  saveCountry(data){
    const url_api = 'http://localhost:3000/api/Country_TBs/';
    return this.http.post(url_api, data).pipe(map(data => data));
  }
  saveAppUser(data){
    const url_api = 'http://localhost:3000/api/AppUser_TBs';
    return this.http.post(url_api, data).pipe(map(data => data));
  }
}
