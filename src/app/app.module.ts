import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { AddShoppingItemComponent } from './components/add-shopping-item/add-shopping-item.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignIupComponent } from './components/sign-iup/sign-iup.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShoppingItemComponent,
    AddShoppingItemComponent,
    HomeComponent,
    AccountComponent,
    SignInComponent,
    SignIupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
