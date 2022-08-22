import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario = {
    email: '',
    password: ''

  }


   
  constructor(private authService: AuthService, private router:Router){}
  
  ingresar(){
    console.log(this.usuario);
    const {email, password}=this.usuario;
    this.authService.login(email, password).then(res=> {
      console.log("Se logueó con correo y clave del sistema " ,res);
      if(res==null)
      this.router.navigate(['/nohome']);
    else this.router.navigate(['/home']);
    })

  }

 

  ingresarconGoogle(){
    console.log(this.usuario);
    const {email, password}=this.usuario;
    this.authService.loginconGoogle(email, password).then(res=> {
      console.log("Se logueó con cuenta Google" ,res);
      this.router.navigate(['/home']);
    })

  }

  obtenerUsuarioLogged(){
    return this.authService.getUserLogged().subscribe(res=>{
      console.log("Mostrando al usuario logado actualmente: " + res?.email);

    });
  
  }

  logout(){
    this.authService.logOut();
    console.log("Usuario ha cerrado sesión");
 
  }

  ngOnInit(): void {
  }

}
