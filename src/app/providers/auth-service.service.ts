import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable()
export class AuthServiceService {
	provider: firebase.auth.GoogleAuthProvider;


  constructor(public afAuth: AngularFireAuth) { 
  this.provider = new firebase.auth.GoogleAuthProvider();


}

loginWithGoogle() {

return this.afAuth.auth.signInWithPopup(this.provider);

}

logout() {

return firebase.auth().signOut();

}

}
