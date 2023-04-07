import { Component, Input } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
  @Input() width: number[] = this.range(3);
  @Input() height: number[] = this.range(3);
  gameRunning: boolean = true;
  draw: boolean = false;
  restart: boolean = false;

  constructor(private engine: EngineService) {
    this.engine.subscribe({
      next: (x) => {
        this.gameRunning = !x[0];
        this.draw = x[1] === "draw";
      },
      error: function (err: any): void {
        throw new Error('Function not implemented.');
      },
      complete: function (): void {
        throw new Error('Function not implemented.');
      }
    });

    this.engine.restartSubscribe({
      next: (x) => {
        console.log("flippping");
        this.restart = true;
        this.draw = false;
      },
      error: function (err: any): void {
        throw new Error('Function not implemented.');
      },
      complete: function (): void {
        throw new Error('Function not implemented.');
      }
    });
  }

  private range(max: number): number[] {
    let range: number[] = [];
    for (let i = 0; i < max; i++) {
      range.push(i);
    }
    return range;
  }
}
