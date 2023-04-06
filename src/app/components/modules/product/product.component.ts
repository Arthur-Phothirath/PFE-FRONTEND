import { Component, HostBinding } from "@angular/core";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @HostBinding('style.height') width = '100%';
}
