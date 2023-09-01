import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare var handleSignout: any; // Declare the global function to avoid TypeScript errors

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  public isMenuOpen: boolean = false;
  userProfile: any;
  isScrolled = false;

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
    console.log("userProfile:", this.userProfile)
  };

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    })
  };

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

}
