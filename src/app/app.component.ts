import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gameTask';
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private auth:ServicesService, private router:Router){}
ngOnInit(){
  const token =localStorage.getItem('token');
  if(token){
    this.router.navigate(['logic']);
  }else{
    this.router.navigate([''])
  }
}
}
