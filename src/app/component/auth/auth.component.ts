import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  status!: boolean ;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.status = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        this.status = this.authService.isAuth;
        console.log(this.status);

        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.status = this.authService.isAuth;
    console.log(this.status);
  }

}
