import { Component } from '@angular/core';
import { AppButton } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { AppModal } from '../modal/modal.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, AppButton, AppModal, AppButton],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class AppBoard {
  constructor(public gameService: GameService) {}

  handleClick(row: number, col: number): void {
    if (this.gameService.board[row][col] === '' && !this.gameService.winner) {
      this.gameService.board[row][col] = this.gameService.currentPlayer;

      if (this.gameService.checkWinner()) {
      } else if (this.gameService.checkDraw()) {
        this.gameService.isDraw = true;
      } else {
        this.gameService.currentPlayer =
          this.gameService.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  resetBoard(): void {
    this.gameService.resetBoard();
  }
}
