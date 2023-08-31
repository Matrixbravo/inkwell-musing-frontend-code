import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var handleSignout: any; // Declare the global function to avoid TypeScript errors

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  public userProfile: boolean = false;

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
  }

  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    })
  };

}
