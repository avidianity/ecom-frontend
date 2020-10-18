import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './categories/index/index.component';
import { FormComponent } from './categories/form/form.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, HomeComponent, FourZeroFourComponent, NavbarComponent, IndexComponent, FormComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
