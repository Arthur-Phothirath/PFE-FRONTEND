import { Component, Input } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { StorageService } from '../services/storage/storage.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  email?: string;

  constructor(
    private storageService: StorageService,
    private readonly appService: AppService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      const decodedToken: any = jwt_decode(user.token);

      this.roles = decodedToken.role;
      this.email = decodedToken.email;
      console.log(decodedToken)
      this.appService.setUserRoles(this.roles);
      this.appService.setUserName(this.email || '');
      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    }
  }

  logout(): void {
    this.storageService.clean();
  }
}
