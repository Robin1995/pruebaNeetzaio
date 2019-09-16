import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  listUsers: any;
  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
    this.dataApi.getAllUsers().subscribe(data => {
    this.listUsers = data;
    });
  }

}
