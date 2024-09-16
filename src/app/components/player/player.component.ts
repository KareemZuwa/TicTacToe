import { Component, Input } from '@angular/core';
import { AppCircleIcon } from '../circle-icon/circle-icon.component';
import { AppCloseIcon } from '../close-icon/close-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [AppCircleIcon, AppCloseIcon, CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class AppPlayer {
  @Input() player: string = '';
  @Input() backgroundColor: string = '#ECAF4F';
  @Input() icon: string = 'circle';
}
