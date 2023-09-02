import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs'
import { RegistrationUserInformationService } from 'src/app/services/registration-user-information.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true
})
export class RegistrationComponent {

  private allSubscriptions: Subscription[] = []

  registrationForm = new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    userPassword: new FormControl('')
  });

  constructor(private router: Router ,public resgistrationUserinfoService: RegistrationUserInformationService) {}

  async ngOnInit(): Promise<void> {
  }

  onSubmit() {

    let payload = {
      name: this.registrationForm.get('name')?.value,
      userName : this.registrationForm.get('userName')?.value,
      userEmail : this.registrationForm.get('userEmail')?.value,
      userPassword : this.registrationForm.get('userPassword')?.value,
    }

    console.log("payload:", payload);

    this.allSubscriptions.push(this.resgistrationUserinfoService.getUserRegistrationDetails(payload).subscribe((response: any) => {
      console.log("Response:", response);
      if (response) {
        this.router.navigate(["/login"]).then(() => {
          window.location.reload();
        })
      }
    }, (error) => {
      console.error(error);
    }));

  }
}
