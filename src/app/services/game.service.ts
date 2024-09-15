import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  currentPlayer: string = 'O';
  winner: string | null = null;
  isDraw: boolean = false;

  constructor() {}

  resetBoard(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'O';
    this.winner = null;
    this.isDraw = false;
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
        this.board[a[0]][a[1]] === this.currentPlayer &&
        this.board[b[0]][b[1]] === this.currentPlayer &&
        this.board[c[0]][c[1]] === this.currentPlayer
      ) {
        this.winner = this.currentPlayer;
        return true;
      }
    }
    return false;
  }

  checkDraw(): boolean {
    return this.board.every((row) => row.every((cell) => cell !== ''));
  }
}
