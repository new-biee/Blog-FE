import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {UserService} from "../../../../service/user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(private userService: UserService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id')
      // @ts-ignore
      this.findAccountById(id);
    });
  }

  ngOnInit(): void {
  }

  findAccountById(id: number) {
    this.userService.userDetail(id).subscribe(value => {
      this.user = value;
      console.log(value)
    }, error => {
      console.log(error)
    });
  }
}
