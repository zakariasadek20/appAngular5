import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-folowers',
  templateUrl: './profile-folowers.component.html',
  styleUrls: ['./profile-folowers.component.css']
})
export class ProfileFolowersComponent implements OnInit {

  id:number;
  username:string;

  page:string;//pour queryparam
  type:string;//pour queryparam
  constructor( private routes:ActivatedRoute) { }

  ngOnInit() {
    ///V1
    // this.routes.paramMap.subscribe(params=>{
    //   console.log(params);
    //   this.id= +params.get('id');
    //   this.username=params.get('username');
      
    // })
    //V2
    this.id = +this.routes.snapshot.paramMap.get('id')
    this.username=this.routes.snapshot.paramMap.get('username')

    //////////
    //V1
    // this.routes.queryParamMap.subscribe( queryParam=>{
    //   this.page=queryParam.get('page');
    //   this.type=queryParam.get('type');
    // })
    //V2
    this.page=this.routes.snapshot.queryParamMap.get('page')
    this.type=this.routes.snapshot.queryParamMap.get('type')
    
  }


}
