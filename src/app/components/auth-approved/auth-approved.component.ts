import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountResponse } from 'src/app/models/account.interface';
import { AccountService } from 'src/app/service/account.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth-approved',
  templateUrl: './auth-approved.component.html',
  styleUrls: ['./auth-approved.component.css']
})
export class AuthApprovedComponent implements OnInit {
  loaded = false;
  constructor(private authService: AuthService, private accountService: AccountService, private router: Router) { }
  account!: AccountResponse;
  ngOnInit(): void {
    let token = localStorage.getItem('REQUEST_TOKEN');

    this.authService.createSession(token!).subscribe(resp => {
      localStorage.setItem('SESSION_ID', resp.session_id);
      this.accountService.getAccountDetails().subscribe(resp => {
        debugger;
        this.account = resp;
        localStorage.setItem('AVATAR_PATH', ('https://www.themoviedb.org/t/p/w50_and_h50_face' + resp.avatar.tmdb.avatar_path));
        localStorage.setItem('USERNAME', resp.username);
        this.loaded = true;
        this.router.navigate(['/home']);
      });

    });
  }


}
