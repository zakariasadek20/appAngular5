import { AppError } from './../common/app-error';
import { GetFolowersService } from './../services2/get-folowers.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundPage } from '../common/not-found-page';

@Component({
  selector: 'github-folowers',
  templateUrl: './github-folowers.component.html',
  styleUrls: ['./github-folowers.component.css']
})
export class GithubFolowersComponent implements OnInit {

  constructor(private getfolowers:GetFolowersService) { }
  folowers:any[]=[]
  ngOnInit() {
    this.getfolowersMMethod();
  }
getfolowersMMethod(){
  this.getfolowers.getFolowers().subscribe(
    (allfolowers)=>{this.folowers=allfolowers;},
    (error:AppError)=>{
      if(error instanceof NotFoundPage){
        alert('page not found');
      }
      alert('error');
    }
    
    
  )
}
}
