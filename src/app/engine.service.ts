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
      return this.currentPlayer;
    }
    return this.board[x][y];
  }
}
