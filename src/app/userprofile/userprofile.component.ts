import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { GithubService } from '../github-service.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  Users!: User;
  Repos: Repo[] = [];
  constructor(public userHttpService: GithubService) {}

  ngOnInit() {
    this.searchGit('nancy88199488');
  }
  searchGit(searchTerm: string) {
    this.userHttpService.searchGits(searchTerm).then(
      (success) => {
        this.Users = this.userHttpService.Users;
      },
      (error) => {
        console.log(error);
      }
    );
    this.userHttpService.searchRepos(searchTerm).then((success) => {
      this.Repos = this.userHttpService.Repos;
    });
  }
}
