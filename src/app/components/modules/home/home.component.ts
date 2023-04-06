import { Component, OnInit } from '@angular/core';
// import { AppService } from '../../app.service';
// import { UserService } from '../modules/user/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  content?: string;
  // role = this.appService.getUserRoles();

  constructor(
    // private userService: UserService,
    // private readonly appService: AppService,
  ) {}

  ngOnInit(): void {
    // this.userService.getPublicContent().subscribe({
    //   next: (data) => {
    //     this.content = data;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     if (err.error) {
    //       this.content = JSON.parse(err.error).message;
    //     } else {
    //       this.content = 'Error with status: ' + err.status;
    //     }
    //   },
    // });
  }
}
