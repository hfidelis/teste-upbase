import { Component } from '@angular/core';
import { Professional } from 'src/app/models/Professional';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent {
  dr_carolina: Professional = {
    name: 'Carolina Magalhães',
    picture: 'assets/profile-1.jpg'
  }
}
