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

  private range(max: number): number[] {
    let range: number[] = [];
    for (let i = 0; i < max; i++) {
      range.push(i);
    }
    return range;
  }
}
