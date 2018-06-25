import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from '../providers/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(public authService: AuthServiceService, private router: Router) { }
login() {
this.authService.loginWithGoogle().then((data) => {
//this.router.navigate(['']);

});

}

ngOnInit() {

}

}