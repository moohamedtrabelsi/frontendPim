import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsComponent } from './icons/icons.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SkillsComponent } from './skills/skills.component';
import { ExpertLayoutComponent } from './expert-layout/expert-layout.component';
import { ExpertdashboardComponent } from './expertdashboard/expertdashboard.component';
import { ProfileExpertComponent } from './profile-expert/profile-expert.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    Ng2SearchPipeModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    SkillsComponent,
    ExpertLayoutComponent,
    ExpertdashboardComponent,
    ProfileExpertComponent,
    IconsComponent,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
