import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { Repo } from '../repo';
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user!: User
  repoDetails!: Repo
  githubServiceService!:GithubServiceService

  constructor( githubServiceService:GithubServiceService) {
    this.githubServiceService=githubServiceService
   }

  ngOnInit(){
    this.user = this.githubServiceService.user
    this.repoDetails = this.githubServiceService.respositoryData
  }

}
