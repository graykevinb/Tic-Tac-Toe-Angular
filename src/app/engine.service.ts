import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class EngineService {

  private currentPlayer: string = "X";
  private board: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  constructor() { }

  move(x: number, y: number): string {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    if(this.board[x][y] === "") {
      this.board[x][y] = this.currentPlayer;
     
      console.log(this.checkWin());

      return this.currentPlayer;
    }
    return this.board[x][y];
  }

  checkWin(): [boolean, string] {
    let won = false;

    // Check rows
    for(let i = 0; i < this.board.length && !won; i++) {
      won = this.board[i].every(cell => cell === this.currentPlayer);
    }

    // Check columns
    for(let i = 0; i < this.board.length && !won; i++) {
      won = this.board.every(row => row[i] === this.currentPlayer);
    }

    // Check diagonals
    if(!won) {
      won = true;
      for(let i = 0; i < this.board.length && won; i++) {
        won = this.board[i][i] === this.currentPlayer;
      }
    }

    if(!won) {
      won = true;
      for(let i = 0; i < this.board.length && won; i++) {
        won = this.board[i][this.board.length - i - 1] === this.currentPlayer;
      }
    }

    return [won, this.currentPlayer];
  }
}
