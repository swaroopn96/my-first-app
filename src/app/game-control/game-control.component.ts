import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  preserveWhitespaces: true,
})
export class GameControlComponent implements OnInit {
  interval;
  lastNum = 0;
  @Output() gameStarted = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onGameStartClick() {
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.lastNum + 1);
      this.lastNum++;
    }, 1000);
  }

  onPauseClick() {
    clearInterval(this.interval);
  }
}
