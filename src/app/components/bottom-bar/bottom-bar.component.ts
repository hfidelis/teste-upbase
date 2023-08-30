import { Component } from '@angular/core';
import { Label } from 'src/app/models/Label';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
  labels: Array<Label> = [
    {
      icon: 'ph-fill ph-house',
      label: 'Home',
      active: false
    },
    {
      icon: 'ph-bold ph-clipboard-text',
      label: 'Plantões',
      active: true
    },
    {
      icon: 'ph-bold ph-heart-straight',
      label: 'Favoritos',
      active: false
    },
    {
      icon: 'ph-bold ph-user',
      label: 'Minha conta',
      active: false
    }
  ]
}
