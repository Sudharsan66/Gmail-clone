import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MailsComponent } from './mails/mails.component';
import { SidehovermenuComponent } from './sidehovermenu/sidehovermenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MailsComponent,
    SidehovermenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
