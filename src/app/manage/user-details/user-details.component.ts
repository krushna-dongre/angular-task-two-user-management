import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;
  constructor(private route: ActivatedRoute, private usersService: UserService) {


  }
  ngOnInit() {
    const idParam = this.route.snapshot.params['id'];
    this.user = this.usersService.users.find((u) => u.id === idParam);

    this.route.params.subscribe(
      (param) => {
        this.user = this.usersService.users.find((u) => u.id === param['id']);
      }
    );
  }

}
