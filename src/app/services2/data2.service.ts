import { catchError,map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppError } from '../common/app-error';

import { Observable } from 'rxjs';
import { NotFoundPage } from '../common/not-found-page';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

    constructor(private http:Http,private url:string){

    }
    getFolowers(){
        return this.http.get(this.url)
        .pipe(
            catchError(this.handelError),
            map(response=>response.json()))
    }

    private handelError(error:Response){
        if(error.status===404){
            return Observable.throw(new NotFoundPage)
        }
        return Observable.throw(new AppError);
    }
}