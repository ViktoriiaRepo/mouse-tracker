import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-with-rxjs',
  templateUrl: './child-with-rxjs.component.html',
  styleUrls: ['./child-with-rxjs.component.css'],
})
export class ChildWithRxjsComponent implements OnChanges {
  @Input() x!: number;
  @Input() y!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['x'] || changes['y']) {
      console.log(
        `ChildWithRxjsComponent updated: X = ${this.x}, Y = ${this.y}`
      );
    }
  }
}
