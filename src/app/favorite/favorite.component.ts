import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  /*,inputs:['isFavorite']*/
})
export class FavoriteComponent implements OnInit {
 
  @Input('is-fav') isSelected=true;

  @Output('myEvent') change=new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isSelected=!this.isSelected;
    //console.log("hhh")
    this.change.emit({newState:this.isSelected});
  }
}
