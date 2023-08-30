import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import 'ionicons/dist/ionicons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public username: string = "";
  public password: string = "";

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
