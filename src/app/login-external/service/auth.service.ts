import { BehaviorSubject, Observable, share } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public loginUser$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router, private http: HttpClient) {}
  public logOut(): void {
    this.router.navigate(["/login"]);
    localStorage.removeItem("token");
  }

  public fetchUserData(): Observable<any[]> {
   return this.http.get<any[]>("./assets/config.json").pipe(share());
  }
}
