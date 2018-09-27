import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
 repo:any=[];
 repos: any[];
 username: string;

  constructor(private RepoService: RepoService) {
   
  }
 
  findRepo(){
    this.RepoService.updateRepo(this.username);
    
    this.RepoService.getrepoInfo().subscribe(repo =>{
      this.repo = repo;
    });

    this.RepoService.getrepos().subscribe(repos =>{
      this.repos = repos;
   
   })
  }

  ngOnInit(){
  }

  }
