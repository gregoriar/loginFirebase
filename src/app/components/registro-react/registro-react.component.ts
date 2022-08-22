import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-react',
  templateUrl: './registro-react.component.html',
  styleUrls: ['./registro-react.component.css']
})
export class RegistroReactComponent implements OnInit {

  form: FormGroup;
  msgErrorForm:string="";
  mostrar: boolean=false;
  

  constructor(private formBuilder: FormBuilder, private authService: AuthService,  private router: Router) {

    this.buildForm();

   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(8)]]
      
    });

   

   /* this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });*/
  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
      this.registrar();

    }else {
      this.form.markAllAsTouched();
    }
  }

  blanquearMsgError(){
    if (this.msgErrorForm != null)
       this.msgErrorForm="";
  
  }

  registrar(){
    
    /*console.log(this.usuario);
    const {email, password}=this.usuario;*/
    this.msgErrorForm="";
    this.mostrar=false;
  
    this.authService.register(this.form.value.email, this.form.value.password).then(res=> {
      
      console.log("Se registró con correo y clave del sistema ",res);
      
      if(res=="auth/email-already-in-use"){
      
        //alert("Error al interntar registrar el usuario, debes ingresar email y password válidos")
        
        this.msgErrorForm="La dirección email "+ this.form.value.email +" ya esta en uso en otra cuenta, pruebe con otro email";
        this.mostrar=true;
      
        //this.router.navigate(['/nohome']);
      }
   
      else this.router.navigate(['/home']);
    })

  }


  get txtEmail(){
    return this.form.get('email');
  }

  get txtPassword(){
    return this.form.get('password');
  }

}