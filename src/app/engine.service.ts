import { Injectable } from '@angular/core';
import { Observer, Subject} from 'rxjs';


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
  private gameOver: boolean = false;
  gameState: Subject<any>;

  constructor() {
    this.gameState = new Subject<[boolean, string[]] | [false, null]>();
  }

  subscribe(observer: Observer<[boolean, string[]] | [false, null]>) {
    this.gameState.subscribe(observer);
  }


  move(x: number, y: number): string {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    if(this.board[x][y] === "" && !this.gameOver) {
      this.board[x][y] = this.currentPlayer;
      
      const state: [boolean, string[]] | [false, null] = this.checkWin();
      this.gameOver = state[0];
      this.gameState.next(state);
      return this.currentPlayer;
    }
    return this.board[x][y];
  }

  checkWin(): [boolean, string[]] | [false, null] {
    let won = false;

    // Check rows
    for(let i = 0; i < this.board.length && !won; i++) {
      won = this.board[i].every(cell => cell === this.currentPlayer);
      if(won) {
        return [won, [`${i}-0`, `${i}-1`, `${i}-2`]];
      }
    }

    // Check columns
    for(let i = 0; i < this.board.length && !won; i++) {
      won = this.board.every(row => row[i] === this.currentPlayer);
      if(won) {
        return [won, [`0-${i}`, `1-${i}`, `2-${i}`]];
      }
    }

    // Check diagonals
    if(!won) {
      won = true;
      for(let i = 0; i < this.board.length && won; i++) {
        won = this.board[i][i] === this.currentPlayer;
      }
      if(won) {
        return [won, [`0-0`, `1-1`, `2-2`]];
      }
    }

    if(!won) {
      won = true;
      for(let i = 0; i < this.board.length && won; i++) {
        won = this.board[i][this.board.length - i - 1] === this.currentPlayer;
      }
      if(won) {
        return [won, [`0-2`, `1-1`, `2-0`]];
      }
    }

    return [false, null];
  }
}
