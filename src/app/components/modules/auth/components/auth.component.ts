import { Component, HostBinding } from "@angular/core";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  @HostBinding('style.height') width = '100%';
}
