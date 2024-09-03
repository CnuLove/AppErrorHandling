import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class CustomErrorHandle implements ErrorHandler{
    constructor(private snackbar:MatSnackBar,private zone:NgZone){}
    handleError(error: unknown): void {
        this.zone.run(()=>{
                this.snackbar.open(
                    'Customer Error Message',
                    'Close',
                    {
                        duration:5000
                    })
                }
            )
        }
    }