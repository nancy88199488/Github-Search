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
    interface apiResponse{
      login:string;
      avatar_url:string;
    }
    let promise = new Promise<void>((resolve, reject) =>{
      this.http.get<apiResponse>("https://api.github.com/users/" + user).toPromise().then((response) =>{
        this.user.login=response.login
        this.user.avatar_url=response.avatar_url

        resolve()
      },err =>{
        reject(err)
      })
      this.http.get<any>("https://api.github.com" + user +"/repos").toPromise().then((response) =>{
        for(let i =0; i< response.length; i++){
          this.newUserData= new Repo("",new Date(),"","")
          response[i].name
          response[i].updated_at
          response[i].clone_url
          response[i].language
          this.respositoryData.push(this.newUserData)

        }
        resolve()

      },err =>{
        reject(err)
      })
    })
    return promise
  }
}

