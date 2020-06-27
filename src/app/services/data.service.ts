import { NotFoundError } from './../common/not-found-error';
import { catchError,map } from 'rxjs/operators';


import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppError } from '../common/app-error';

import { BadInput } from '../common/bad-input';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private url='https://jsonplaceholder.typicode.com/posts';
  //private url;

  constructor(private url:string,private http:Http) {

   }
   getAll(){
    return this.http.get(this.url)
    .pipe(catchError(this.handelError),
    map(response=>response.json()));
   }

   create(resource){
     return   this.http.post(this.url,resource)
     .pipe(
       catchError(  this.handelError   )
       ,map(response=>response.json()))
     
   }
   update(resource){
    return this.http.put(this.url+'/'+resource.id,resource)
    .pipe(catchError(this.handelError)
    ,map(response=>response.json()));

   }

   delete(resource){
    return this.http.delete(this.url+'/'+resource.id)
    .pipe(
        catchError(this.handelError),
        map(response=>response.json())
    )
    
    
   }
   private handelError(error:Response) {
    if(error.status===400){
      return Observable.throw(new BadInput);
    }
     if (error.status==404) {
       return Observable.throw(new NotFoundError);
     }
     return Observable.throw(new AppError);
   }

}
