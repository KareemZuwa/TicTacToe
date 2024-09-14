import { Component, Input } from '@angular/core';
import { AppButton } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, AppButton],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class AppBoard {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  currentPlayer: string = 'X';

  handleClick(row: number, col: number): void {
    if (this.board[row][col] === '') {
      this.board[row][col] = this.currentPlayer;
      console.log(
        `Player ${this.currentPlayer} clicked on cell [${row}, ${col}]`
      );

      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    console.table(this.board);
  }

  resetBoard(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
    console.log('Board has been reset');
    console.table(this.board);
  }
}
