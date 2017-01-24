import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router'
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";


@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(public af: AngularFire,private router: Router) {

    }

    canActivate() {
        console.log('authGuard: canActivate');
        return this.af.auth.take(1).map(authState => {
            if (authState) {
                console.log(authState);
                console.log('authGuard: authenticated');
                return true;
            } else {
                console.log('authGuard: not authenticated');
                //this.router.navigate(['/custom']);
                return false;
            }
        })
        //return true;
    }
}