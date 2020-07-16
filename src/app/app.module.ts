import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScreenComponent } from './screen/screen.component';
import { HeaderComponent } from './screen/header/header.component';
import { MenuOptionsComponent } from './screen/menu-options/menu-options.component';
import { SideDrawerComponent } from './screen/side-drawer/side-drawer.component';
import { MenuOptionComponent } from './screen/menu-options/menu-option/menu-option.component';
import { DrawerProfileComponent } from './screen/side-drawer/drawer-profile/drawer-profile.component';
import { DrawerMenuComponent } from './screen/side-drawer/drawer-menu/drawer-menu.component';
import { DrawerMenuItemComponent } from './screen/side-drawer/drawer-menu/drawer-menu-item/drawer-menu-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    HeaderComponent,
    MenuOptionsComponent,
    SideDrawerComponent,
    MenuOptionComponent,
    DrawerProfileComponent,
    DrawerMenuComponent,
    DrawerMenuItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
