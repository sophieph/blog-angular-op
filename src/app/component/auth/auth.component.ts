import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  status: boolean = false;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful !');
        this.status = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.status = this.authService.isAuth;
  }

}
