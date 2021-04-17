import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent implements OnInit {



  constructor(private http: HttpClient, 
              private router: Router,
              private user_service: UserService) {}

  ngOnInit(): void {

    this.user_service.getUser();
    
  }
}
