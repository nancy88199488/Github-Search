import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  user!: User;
  repo!: Repo;
  newUserData:any=[]
  respositoryData:any=[]
  constructor(private http:HttpClient) { 
    this.user = new User("","")
    this.repo = new Repo("",new Date(),"","")
  }
  getUserData(user:string){
    interface apiResponse
  }
}

