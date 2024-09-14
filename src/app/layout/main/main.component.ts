import { Component } from '@angular/core';
import { AppPlayer } from '../../components/player/player.component';
import { AppBoard } from '../../components/board/board.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AppPlayer, AppBoard],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class AppMain {}
