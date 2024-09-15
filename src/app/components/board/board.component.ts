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
      console.log(
        `Player ${this.gameService.currentPlayer} clicked on cell [${row}, ${col}]`
      );

      if (this.gameService.checkWinner()) {
        console.log(`Player ${this.gameService.winner} wins!`);
      } else if (this.gameService.checkDraw()) {
        this.gameService.isDraw = true;
        console.log('The game is a draw!');
      } else {
        this.gameService.currentPlayer =
          this.gameService.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
    console.table(this.gameService.board);
  }

  resetBoard(): void {
    this.gameService.resetBoard();
  }
}
