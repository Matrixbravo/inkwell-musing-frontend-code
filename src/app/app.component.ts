import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inkwell-musing-frontend-code';

  constructor() {}

  public userProfile: any = null;

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
    console.log("userProfile:", this.userProfile);
  }

}
