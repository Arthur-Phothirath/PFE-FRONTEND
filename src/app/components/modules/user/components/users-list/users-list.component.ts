import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../../../models/user/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  name = '';
  id = 1;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  // removeAllUsers(): void {
  //   this.userService.deleteAll()
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.refreshList();
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  searchTitle(): void {
    this.currentUser = {};
    this.currentIndex = -1;

    this.userService.findByName(this.name).subscribe({
      next: (data) => {
        this.refreshList();
        if(this.users){
          for (let i = 0; i < this.users.length; i++) {
            if(this.users[i].name == this.name){
              this.currentUser = this.users[i];
              this.currentIndex = i;
            }
          }
        }
        // this.users = data;
        // console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
