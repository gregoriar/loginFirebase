import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';
//para login con provider Google

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async register (email: string, password: string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email, password);


    }catch(err){
      console.log("Error en registro de usuario  ", err.code); 
      // err.code="auth/email-already-in-use", si el email-usuario ya pertenecen a otro usuario 
      return err.code;
    }

  }

  async login (email: string, password: string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email, password);


    }catch(err){
      console.log("Error en login ", err.code);
      
      return err.code;

        console.log("Error en login ", err.code);
      //err.code="auth/wrong-password" , si el  email  del usiario existe pero ingresó con password errado
      //err.code="auth/user-not-found", si el email del usuario NO existe en la app
      return err.code;
       */

    }

  }

  async loginconGoogle (email: string, password: string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());


    }catch(err){
      console.log("Error en login Google", err);
      return null;

    }

  }

    getUserLogged(){
      return this.afauth.authState;
    
  }

  logOut(){
    this.afauth.signOut();
  }

  emailinUse(){

    this.afauth.createUserWithEmailAndPassword
  }

}
