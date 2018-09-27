import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private username:string;
  operator = "https://api.github.com/users/"
  access = "?access_token=abff63ac7da65497ddc76741f416c57e7d3b7414"

  constructor(private http:Http) {
    console.log()
    this.username = 'abbiemurugi'
   }
   getrepoInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + this.access)
     .map(res => res.json());
   }
  }
