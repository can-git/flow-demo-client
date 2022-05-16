import { Component, OnInit } from '@angular/core';
import { JwtSecurityService } from 'src/app/services/jwt-security.service';
import { LoginRequest } from 'src/app/payload/request/login-request.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlowDataService } from 'src/app/services/flow-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username:['', [Validators.required]],
    password:['', [Validators.required]]
  });

  loginRequest:any;
  loginResponse:any;

  response:any

  constructor(private fb:FormBuilder, 
    private service:JwtSecurityService,
    private dataService:FlowDataService,
    private router:Router) { }


  ngOnInit(): void {
    // this.router.navigate(['/home']);
    this.loginForm = this.fb.group({
      username: ['can', [Validators.required]],
      password: ['123', [Validators.required]],
  });
  }

  submit(){
    if(this.loginForm.invalid){
      return;
    }
    this.getAccessToken(new LoginRequest(
      this.loginForm.get("username")?.value, 
      this.loginForm.get("password")?.value)
    );
  }

  public getAccessToken(LoginReq:any){
    this.service.generateToken(LoginReq)
      .subscribe((data) => this.saveToken(data));
  }

  public saveToken(token:any){
    sessionStorage.setItem('token', token);
    // let resp = this.dataService.dailyData();
    // resp.subscribe((data) => console.log(data));
    this.router.navigate(['/home']);
  }

}
