import { Component } from '@angular/core';
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

  currentPlayer: string = 'O';
  winner: string | null = null;
  isDraw: boolean = false;

  handleClick(row: number, col: number): void {
    if (this.board[row][col] === '' && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      console.log(
        `Player ${this.currentPlayer} clicked on cell [${row}, ${col}]`
      );

      if (this.checkWinner()) {
        console.log(`Player ${this.winner} wins!`);
      } else if (this.checkDraw()) {
        this.isDraw = true;
        console.log('The game is a draw!');
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
    console.table(this.board);
  }

  checkWinner(): boolean {
    const winningCombinations = [
      // Rows
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // Columns
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // Diagonals
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        this.board[a[0]][a[1]] !== '' &&
        this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
        this.board[a[0]][a[1]] === this.board[c[0]][c[1]]
      ) {
        this.winner = this.board[a[0]][a[1]];
        return true;
      }
    }

    return false;
  }

  checkDraw(): boolean {
    return this.board.every((row) => row.every((cell) => cell !== ''));
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
