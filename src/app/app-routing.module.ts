import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginReactComponent } from './components/login-react/login-react.component';
import { NohomeComponent } from './components/nohome/nohome.component';
import { PagNoEncontradaComponent } from './components/pag-no-encontrada/pag-no-encontrada.component';
import { RegistroReactComponent } from './components/registro-react/registro-react.component';


const routes: Routes = [

  {
    pathMatch: 'full',
    path:"",
    redirectTo: 'nohome'
  } ,

  {
    path:"login_react",
    component: LoginReactComponent 
  } ,

  {
    path:"registro_react",
    component: RegistroReactComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"nohome",
    component: NohomeComponent
  },
  {
    path:"**",
    component: PagNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
