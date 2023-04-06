import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../../app.service';
import { StorageService } from '../../../../../services/storage/storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    name: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  userName = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private readonly appService: AppService,
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { name, password } = this.form;

    this.authService.login(name, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.userName = this.storageService.getUser().name;
        this.reloadPage();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  get checkRole(){
    return this.appService.getUserRoles();
  }
}
