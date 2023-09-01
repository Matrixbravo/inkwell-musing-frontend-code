import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchuserdetailsService } from 'src/app/services/fetchuserdetails.service';
declare var handleSignout: any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userProfile: any;
  userDetails: any;

  constructor(private router: Router, private fetchUserDetails: FetchuserdetailsService) {}

  async ngOnInit(): Promise<void> {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
    this.userDetails = await this.fetchUserDetails.loadUserProfileData();
    console.log("this.userDetails[this.userProfile.emal]:",this.userDetails[this.userProfile.email].name)
  }

  getUserDetails(): any {
    if (this.userDetails && this.userDetails[this.userProfile.email]) {
      return this.userDetails[this.userProfile.email];
    } else {
      return null; // Return null or handle the case when the email is not found.
    }
  }

  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    })
  };
}
