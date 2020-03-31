import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ActiveUserComponent } from './active/active-user/active-user.component';
import { DeletedUserComponent } from './deleted/deleted-user/deleted-user.component';


const routes: Routes = [
  {path : "", component : HomePageComponent},
  {path : "active", component : ActiveUserComponent},
  {path : "deleted", component : DeletedUserComponent},
  {
    path : "manage", loadChildren : ()=> import('./manage/manage.module').then(
        (file) => file.ManageModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
