import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxGamepadModule } from 'ngx-gamepad';

import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatRippleModule } from '@angular/material/core'; 
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HomeComponent } from './_components/home/home.component';
import { ToolbarComponent } from './_components/toolbar/toolbar.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxGamepadModule,
    MatIconModule,
    MatToolbarModule, 
    MatMenuModule, 
    MatSidenavModule, 
    MatRippleModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
