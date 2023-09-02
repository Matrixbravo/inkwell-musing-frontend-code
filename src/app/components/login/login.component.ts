import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs'
import { LoginUserInformationService } from 'src/app/services/login-user-information.service';
import { RegistrationUserInformationService } from 'src/app/services/registration-user-information.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  private allSubscriptions: Subscription[] = []

  loginForm = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl('')
  });

  constructor(private router: Router ,public loginUserinfoService: LoginUserInformationService) {}

  ngOnInit(): void {}

  onSubmit() {

    let payload = {
      userEmail : this.loginForm.get('userEmail')?.value,
      userPassword : this.loginForm.get('userPassword')?.value,
    }
    console.log("Payload:",payload);

    this.allSubscriptions.push(this.loginUserinfoService.getUserLoginDetails(payload).subscribe((response: any) => {
      console.log("Response:", response);
      if (response) {
        this.router.navigate(["/home"]).then(() => {
          window.location.reload();
        })
      }
    }, (error) => {
      console.error(error);
    }));

  }
}
