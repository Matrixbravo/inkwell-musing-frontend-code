import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {

  registrationForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required])
  })

  registrationFormUserDetails(): void {
    
  }

  public showGoogleSignIn: boolean = false;

  constructor() {}

  async ngOnInit(): Promise<void> {
  }

  onSubmit() {
    console.log("userName:", this.registrationForm.controls['userEmail'].value)
  }
}
