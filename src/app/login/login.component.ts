import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public loginForm!:FormGroup;


  myid:any;
  myform:any;
  token:any ="login"
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  
  ngOnInit() {
 
    this.loginForm = new FormGroup({
     
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  onSubmit(){
    localStorage.setItem('token', this.token);
   this.http.get<any>("http://localhost:3000/register").subscribe(res=>{
   const user= res.find((a:any)=>{
    return a.email===this.loginForm.value.email&& a.password=== this.loginForm.value.password
   });
   if(user){
    alert("login success");
    
    this.router.navigate(['dashboard'])
   }else{
    alert('user not found');
   }
  },err=>{
    alert("Something wrong")
  })
  }
  get email() 
  { 
    return this.loginForm.get('email') 
  } 
  get password() { 
    return this.loginForm.get('password') 
  }

  
}
