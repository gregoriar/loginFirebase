import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireStorageModule } from '@angular/fire/compat/storage';
//import { AngularFireAuthModule } from "@angular/fire/compat/auth";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { PagNoEncontradaComponent } from './components/pag-no-encontrada/pag-no-encontrada.component';
import { ChatComponent } from './components/chat/chat.component';
import { NohomeComponent } from './components/nohome/nohome.component';
import { RegistroReactComponent } from './components/registro-react/registro-react.component';
import { LoginReactComponent } from './components/login-react/login-react.component';

// Los componentes se declaran y los modulos se importan

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    PagNoEncontradaComponent,
    ChatComponent,
    NohomeComponent,
    RegistroReactComponent,
    LoginReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
