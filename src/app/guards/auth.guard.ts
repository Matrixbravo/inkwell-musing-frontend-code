import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser") || "");

    if (loggedInUser) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
  
}
