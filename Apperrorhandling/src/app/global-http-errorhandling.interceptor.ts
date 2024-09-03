import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const globalHttpErrorhandlingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(
      err=>{
        console.log("Error log global")
        return throwError(()=>
        {
          console.log("Error throw erro by global")
          return err;
        }
        )
      }
    )
  );
};
