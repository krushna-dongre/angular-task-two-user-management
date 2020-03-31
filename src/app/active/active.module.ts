import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUserComponent } from './active-user/active-user.component';
import { UserManagementModule } from '../user-management/user-management.module';



@NgModule({
  declarations: [ActiveUserComponent],
  imports: [
    CommonModule,
    UserManagementModule
  ]
})
export class ActiveModule { }
