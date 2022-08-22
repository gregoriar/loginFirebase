import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router){}

  usuario = {
    email: '',
    password: ''

  }
  

  registrar(){
    console.log(this.usuario);
    const {email, password}=this.usuario;
    this.authService.register(email, password).then(res=> {
      
      console.log("Se registró con correo y clave del sistema ",res);
      
      if(res==null){
      
        //alert("Error al interntar registrar el usuario, debes ingresar email y password válidos")
        
        //this.router.navigate(['/nohome']);
      }
   
      else this.router.navigate(['/home']);
    })

  }

 



  ngOnInit(): void {
  }

}
