import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-react',
  templateUrl: './login-react.component.html',
  styleUrls: ['./login-react.component.css']
})

export class LoginReactComponent implements OnInit {

    //Me falta adaptar el constructor y metodo de constuccion de validaciones básicas y ajustar las funciones de validacion 
    //de email no existe, cuando se hace login

    form: FormGroup;
    msgErrorForm: string="";
    mostrar: boolean=false;

    usuario = {
      email: '',
      password: ''

    }

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

      this.buildForm();

    }


    ngOnInit(): void {
    }

    private buildForm() {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],

        password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(15)]]
        
      });

    }

    entrarlogin(event: Event) {
      event.preventDefault();
      if(this.form.valid){
        const value = this.form.value;
        console.log(value);
        this.ingresar();
  
      }else {
        this.form.markAllAsTouched();
      }
    }

    ingresar(){

      this.msgErrorForm="";

      this.mostrar=false;

      console.log(this.form.value.email);

      this.authService.login(this.form.value.email, this.form.value.password).then(res=> {
        
        console.log("Se logueó con correo y clave del sistema " ,res);
        
        if(res=="auth/user-not-found" || res=="auth/wrong-password"){         
         
          this.msgErrorForm="Error en el email: "+ this.form.value.email +"/en el password ó método de registro en esta App";
         
          this.mostrar=true;
        //this.router.navigate(['/nohome']);
        }
      
        else this.router.navigate(['/home']);
      })
  
    }

   
    blanquearMsgError(){
      if (this.msgErrorForm != null)
         this.msgErrorForm="";
    
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

    get txtEmail(){
      return this.form.get('email');
    }
  
    get txtPassword(){
      return this.form.get('password');
    }

    /***/
  }
