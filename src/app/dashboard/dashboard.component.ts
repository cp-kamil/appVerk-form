import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../login-external/service/auth.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  protected users: string[] = [];
  protected readonly logOut = "Wyloguj"
  
  constructor(public authService: AuthService) {
     this.authService.fetchUserData().pipe(take(1)).subscribe(user => this.users = user)
  }

  public ngOnInit(): void {
    if (!this.users.length) {
      this.users = require('../../assets/config.json');
    }
  }
}
