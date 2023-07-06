import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { FAVORATESComponent } from './favorates/favorates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    Header2Component,
    Header3Component,
    CartComponent,
    HistoryComponent,
    FAVORATESComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
