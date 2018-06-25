import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router,  RouterModule} from '@angular/router';
// Firebase Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthServiceService } from './providers/auth-service.service';


import { AppComponent } from './app.component';

import { environment} from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp (environment.firebase),
AngularFireDatabaseModule, AngularFireAuthModule,
RouterModule.forRoot([
    {path: '', component: HomeComponent},

{path: 'login', component: LoginComponent}
   ])
   ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

