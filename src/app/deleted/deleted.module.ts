import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUserComponent } from './deleted-user/deleted-user.component';
import { UserManagementModule } from '../user-management/user-management.module';



@NgModule({
  declarations: [DeletedUserComponent],
  imports: [
    CommonModule,
    UserManagementModule
  ]
})
export class DeletedModule { }
