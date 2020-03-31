import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementModule } from '../user-management/user-management.module';

const manageRoutes: Routes = [
  {
      path: '', component: ManageUserComponent, 
      children: [
          { path: ':id', component: UserDetailsComponent }
      ]
  }
];

@NgModule({
  declarations: [ManageUserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UserManagementModule,
    RouterModule.forChild(manageRoutes),
  ],
  exports:[
    ManageUserComponent, UserDetailsComponent
  ]
})
export class ManageModule { }
