import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatCheckboxModule } from '@angular/material/checkbox';
import {  MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppButtonComponent } from './app-button/app-button.component';
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    AppMenuComponent,
    AppButtonComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
