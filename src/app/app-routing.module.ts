import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {path:"github-form",component:GithubFormComponent},
  {path:"github", component:GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
