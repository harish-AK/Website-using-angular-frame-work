import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { FAVORATESComponent } from './favorates/favorates.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { HistoryComponent } from './history/history.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"content",component:ContentComponent},
  {path:"footer",component:FooterComponent},
  {path:"header2",component:Header2Component},
  {path:"cart",component:CartComponent},
  {path:"history",component:HistoryComponent},
  {path:"FAVORATES",component:FAVORATESComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
