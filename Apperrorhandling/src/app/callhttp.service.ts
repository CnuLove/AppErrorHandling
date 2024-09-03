import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallhttpService {
  constructor(private http:HttpClient) { }
  getdata()
  {
    return this.http.get<apiclass[]>("http://localhost:5028/api/Json/getdatas")
    .pipe(
      catchError(err=>{
        console.log("Error log Service")
        return throwError(()=> {
          console.log("Error throw Service")
          return new Error("Customer Error Message")
      })
      })
    )
  }
}

export interface apiclass{
  name:string,
  id:Number
}
