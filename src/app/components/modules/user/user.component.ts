import { Component, HostBinding } from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @HostBinding('style.height') width = '100%';
}
