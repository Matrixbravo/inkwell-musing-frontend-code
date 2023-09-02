import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inkwell-musing-frontend-code';

  shouldShowDashboard: boolean = true;

  public userProfile: any = null;

  constructor(private router: Router) {
    // Subscribe to router events to update shouldShowDashboard
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateShouldShowDashboard(event.url);
      }
    });
  }


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

  updateShouldShowDashboard(url: string): void {
    // Check if the URL contains 'profile' or 'poetryBlog'
    this.shouldShowDashboard = this.userProfile && !url.includes('profile') && !url.includes('poetryBlog');
  }

}
