import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MailComponent } from './mail/mail.component';
import { SidehovermenuComponent } from './sidehovermenu/sidehovermenu.component';
import { LabelComponent } from './label/label.component';
import { RightmenuComponent } from './rightmenu/rightmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidehovermenuComponent,
    MailComponent,
    LabelComponent,
    RightmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
