import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user-management/user/user.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { DeletedUserComponent } from './deleted/deleted-user/deleted-user.component';
import { ActiveUserComponent } from './active/active-user/active-user.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { UserManagementModule } from './user-management/user-management.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ActiveUserComponent,
    DeletedUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    UserManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
