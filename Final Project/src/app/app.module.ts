import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TwobuttonComponent } from './twobutton/twobutton.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginService } from './login.service';
import { DataParserService } from './data-parser.service';
import { SummaryComponent } from './summary/summary.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: 'home', component: LoginComponent},
  { path: '', component: LoginComponent},
  { path: 'settings', component: TwobuttonComponent},
  { path: 'chat', component: ChatboxComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'signup', component: SignupComponent},  
  { path: 'logout', component: LogoutComponent},
  { path: '*', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TwobuttonComponent,
    NavbarComponent,
    ChatboxComponent,
    UserProfileComponent,
    SummaryComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes),
  ],
  providers: [LoginService, DataParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
