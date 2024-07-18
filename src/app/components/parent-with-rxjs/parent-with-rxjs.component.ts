import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-parent-with-rxjs',
  templateUrl: './parent-with-rxjs.component.html',
  styleUrls: ['./parent-with-rxjs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentWithRxjsComponent implements OnInit, OnDestroy {
  x: number = 0;
  y: number = 0;
  private mouseMoveSubscription!: Subscription;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.mouseMoveSubscription = fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        throttleTime(300),
        map((event) => ({ x: event.clientX, y: event.clientY })),
        distinctUntilChanged(
          (prev, curr) => prev.x === curr.x && prev.y === curr.y
        )
      )
      .subscribe((coords) => {
        console.log(`Mouse coordinates: ${coords.x}, ${coords.y}`);
        this.x = coords.x;
        this.y = coords.y;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    console.log('ParentWithRxjsComponent destroyed');
    this.mouseMoveSubscription.unsubscribe();
  }
}
