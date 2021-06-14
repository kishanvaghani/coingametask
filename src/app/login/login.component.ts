import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: ServicesService, private router: Router) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],

    });
  }
  login() {
    if (this.loginForm.value) {
      console.log(this.loginForm.value);

      let mailData = new FormData();
      mailData.append("email", this.loginForm.controls.email.value);
      mailData.append("password", this.loginForm.controls.pass.value);
      mailData.append("invitation_code", "");
      mailData.append("dev_id", "");
      mailData.append("rememberMe", "false");
      console.log(mailData);

      this.auth.loginUser(mailData).subscribe((response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem("token", response.token);
          this.router.navigate(['logic']);
        }else{
          alert("entre valid email or pass")

        }
      },
        (error) => {
          // this.spinner.hide();
          alert("User name or password is incorrect")
        });
    } else {
      alert("please entre all value")
    }

  }

}
