import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
        {path: '', component: HomeComponent},
        {path: 'users', component: UsersComponent, canActivate: [AuthGuard]}, //user auth
        {path: '**', component: Page404Component}
     ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
