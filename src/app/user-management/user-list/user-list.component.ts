import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() route:string;
  usersList = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersList = this.userService.users;
  }


}
