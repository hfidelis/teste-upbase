import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-label',
  templateUrl: './nav-label.component.html',
  styleUrls: ['./nav-label.component.scss']
})
export class NavLabelComponent {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() isActive!: boolean;
}
