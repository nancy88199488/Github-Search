import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'userprofile', component: UserprofileComponent},
  { path: 'repositories', component: RepositoriesComponent},
  { path: '', redirectTo:"/userprofile", pathMatch:"full"},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
