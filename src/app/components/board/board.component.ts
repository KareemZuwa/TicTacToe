import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
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
}
