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
  
  public userProfile: any = false;

  constructor(private router: Router) {
    // Subscribe to router events to update shouldShowDashboard
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateShouldShowDashboard(event.url);
      }
    });
  }


  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
    console.log("userProfile:", this.userProfile);
  }
  
  updateShouldShowDashboard(url: string): void {
    // Check if the URL contains 'profile' or 'poetryBlog'
    this.shouldShowDashboard = this.userProfile && !url.includes('profile') && !url.includes('poetryBlog');
  }

}
