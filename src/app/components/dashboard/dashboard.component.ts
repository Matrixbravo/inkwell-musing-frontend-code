import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var handleSignout: any; // Declare the global function to avoid TypeScript errors

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }

  userProfile: any;

  ngOnInit(): void {
    const storedUserData = sessionStorage.getItem("loggedInUser");
    if (storedUserData) {
      try {
        this.userProfile = JSON.parse(storedUserData);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        // Handle the error, e.g., set this.userProfile to a default value
      }
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
