import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;
 

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }
  register() {
    this.http.post<any>("http://localhost:3000/register", this.registerForm.value).subscribe(res => {
      alert("Register Successful")
      this.registerForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("Something wrong")
    })

  }

  get name() 
  {
     return this.registerForm.get('name') 
    } 
  get email() 
  { 
    return this.registerForm.get('email') 
  } 
  get password() { 
    return this.registerForm.get('password') 
  }


}
