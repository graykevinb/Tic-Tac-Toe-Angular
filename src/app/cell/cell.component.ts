import { Component, Input, Output } from '@angular/core';
import { EngineService } from '../engine.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-cell',
  template: '<div [class.state]="won" (click)="move()">{{ player }}</div>',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() row!: number;
  @Input() col!: number;
  won!: boolean;
  @Output() player: string = "";

  constructor(private engine: EngineService) { 
    this.engine.subscribe({
      next: (x) => {
        if(x[0] === true) { 
          this.won = x[1].includes(`${this.row}-${this.col}`);
        }
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
        this.player = "";
        this.won = false;
      },
      error: function (err: any): void {
        throw new Error('Function not implemented.');
      },
      complete: function (): void {
        throw new Error('Function not implemented.');
      }
    });
  }

  ngOnInit() {

  }

  move() {
    this.player = this.engine.move(this.row, this.col);
  }

}
