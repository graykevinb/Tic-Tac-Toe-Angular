import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() pos: string = '';
  @Output() player: string = "";
  move() {
    console.log(this.pos);
    this.player = "X";
  }
}
