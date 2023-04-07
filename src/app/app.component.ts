import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <div id="top-div">
    <span id="title">
      Tic-Tac-Toe
    </span>
    <app-restart></app-restart>
  </div>
  <app-board></app-board>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'tic-tac-toe';

}
