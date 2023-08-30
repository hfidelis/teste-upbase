import { Component, Input } from '@angular/core';
import { Professional } from 'src/app/models/Professional';

@Component({
  selector: 'app-professional-card',
  templateUrl: './professional-card.component.html',
  styleUrls: ['./professional-card.component.scss']
})
export class ProfessionalCardComponent {
  @Input() professionalData!: Professional;
}
