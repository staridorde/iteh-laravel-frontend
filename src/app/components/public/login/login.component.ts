import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any;

  constructor(private fb: FormBuilder, 
              private http: HttpClient, 
              private router: Router, 
              private auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    })
  }

  submit() {
    const formData = this.form.getRawValue();

    this.auth.login(formData);
  }
}
