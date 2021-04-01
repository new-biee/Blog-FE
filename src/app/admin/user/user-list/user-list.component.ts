import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../../model/user";
import {UserService} from "../../../../service/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users?: any;
  displayedColumns: string[] = ['id', 'username', 'name', 'email', 'role', 'locked', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private serviceUser: UserService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.serviceUser.getAll().subscribe(value => {
      // this.users = value;
      console.log(value)
      this.users = new MatTableDataSource(value);
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
    }, error => {
      console.log(error)
    })
  }

  clickMethod(id: number) {
    if (confirm('Are you sure to delete Account?')) {
      this.serviceUser.delete(id).subscribe();
      alert('Deleted successfully!');
    }
    this.getAll();
  }

  clickBlock(id: number, locked: boolean) {
    console.log(locked)
    if (locked == true) {
      let unlocked: User = {
        locked: true
      }
      this.serviceUser.block(id, unlocked).subscribe(value => {
        console.log(value)
        alert("User unlocked");
        this.getAll();
      })
    }else{
      let unlocked: User = {
        locked: false
      }
      this.serviceUser.block(id, unlocked).subscribe(value => {
        alert("User locked")
        this.getAll();
      })
    }
  }
}
