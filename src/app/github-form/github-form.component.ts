import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  user!: string;
  githubServiceService!:GithubServiceService
  submitUserName(){
    this.githubServiceService.getUserData(this.user)
  }
  constructor( githubServiceService:GithubServiceService) { 
    this.githubServiceService=githubServiceService
  }

  ngOnInit(): void {
  }

}
