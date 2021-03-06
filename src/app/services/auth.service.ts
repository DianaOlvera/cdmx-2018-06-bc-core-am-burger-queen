import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }


  registerUser(email,pass, name){
  return new Promise((resolve,reject)=>{
  this.afAuth.auth.createUserWithEmailAndPassword(email,pass,name)
  .then(userData => resolve(userData),
  err => reject (err.message));
});
}

loginEmail(email,pass){
  return new Promise ((resolve,reject)=>{
  this.afAuth.auth.signInWithEmailAndPassword(email,pass)
  .then(userData => resolve(userData),
  err => reject (err.message));
});
}

getAuth() {
  return this.afAuth.authState.map(auth => auth);
}

logout() {
  return this.afAuth.auth.signOut();
}
}