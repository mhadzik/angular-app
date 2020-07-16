import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScreenComponent } from './screen/screen.component';
import { HeaderComponent } from './header/header.component';
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { MenuOptionComponent } from './menu-option/menu-option.component';
import { DrawerProfileComponent } from './drawer-profile/drawer-profile.component';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { DrawerMenuItemComponent } from './drawer-menu-item/drawer-menu-item.component';
import { MenuOptionDirective } from './menu-option.directive';



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
    MenuOptionDirective

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
