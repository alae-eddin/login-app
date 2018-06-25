import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from './providers/auth-service.service';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user: Observable<firebase.User>;

isLogged: Boolean;

pseudo: String;

email: String;

constructor(public AuthServiceService: AuthServiceService, public afAuth: AngularFireAuth, private router: Router) {

this.user = this.AuthServiceService.afAuth.authState;

this.user.subscribe( (auth) => {

if (auth) {

this.isLogged = true;

this.pseudo = auth.displayName;

this.email = auth.email;

console.log('Connecté');

console.log(auth);

this.router.navigate(['']);

} else {

console.log('Déconnecté');

this.isLogged = false;

this.pseudo = '';

this.email = '';

this.router.navigate(['login']);

}

}

);

}

}