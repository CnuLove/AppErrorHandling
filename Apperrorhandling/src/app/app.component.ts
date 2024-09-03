import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { apiclass, CallhttpService } from './callhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  task$!: Observable<apiclass[]>;

  constructor(private https: CallhttpService) { }
  ngOnInit(): void {
    this.task$ = this.https.getdata()
    .pipe(
      tap(
        {
          
          error:err=>{
            console.log("Error Log Component")
            this.error=err
          }
        }
      ),
    catchError(
      error=>{
        console.log("Error Catch Component")
       return  of([])
      }
    )
    )
  }

  title = 'Apperrorhandling';
  error: Error | null = null;
  Submit() {
    try {
      ({} as any).something();
    }
    catch (error) {
      if (error instanceof Error)
        this.error = error
    }
  }

}
