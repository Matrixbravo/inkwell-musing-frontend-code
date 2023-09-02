import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './components/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PoeryBlogComponent } from './components/poery-blog/poery-blog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'app',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'poetryBlog',
    component: PoeryBlogComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
