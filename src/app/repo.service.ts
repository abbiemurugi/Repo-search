import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private username:string;

  constructor(private http:Http) {
    this.username = 'abbiemurugi';
   }
   getrepoInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + environment.clientid + "&client_secret=" + environment.clientsecret)
     .pipe(map(res => res.json()));
   }
   getRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "repos?client_id=" + environment.clientid + "&client_secret=" + environment.clientsecret)
    .pipe(map(res => res.json()));
  }
 
  updateRepo(username:string){
    this.username = username;
 }

}
