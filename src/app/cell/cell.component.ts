import { Component, Input, Output } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() row: number = 0;
  @Input() col: number = 0;
  @Output() player: string = "";

  constructor(private engine: EngineService) { }

  move() {
    this.player = this.engine.move(this.row, this.col);
  }
}
