import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any;

  constructor(private fb: FormBuilder, 
              private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    })
  }

  submit() {
    const formData = this.form.getRawValue();

    console.log(formData);

    // const data = {
    //   name: formData.name,
    //   email: formData.email,
    //   password: formData.password
    // }

    this.http.post('http://localhost:8000/register', formData).subscribe(
      result => console.log(result),
      err => console.log(err)
    )
  }

}
