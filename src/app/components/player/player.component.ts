import { Component, Input } from '@angular/core';
import { AppCircleIcon } from '../circle-icon/circle-icon.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [AppCircleIcon],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class AppPlayer {
  @Input() player = '';
}
