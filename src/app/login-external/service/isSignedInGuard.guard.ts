import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { take } from "rxjs";

@Injectable()
export class IsSignedInGuard implements CanActivate {
  constructor(private authService: AuthService,private router: Router) { }
  canActivate(): boolean {
      const user = localStorage.getItem('token');
      let isUserLogged: boolean = false
      this.authService.loginUser$.pipe(take(1)).subscribe(data=> isUserLogged = data)
      if(isUserLogged){
        return true
      }
      if(!user) {
          this.router.navigate(["/login"]);

    }
    return true
  }
}
