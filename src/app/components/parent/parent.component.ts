import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  x: number = 0;
  y: number = 0;
  tracking: boolean = true;

  onMouseMove($event: MouseEvent) {
    if (this.tracking) {
      this.x = $event.clientX;
      this.y = $event.clientY;
    }
  }

  toggleTracking() {
    this.tracking = !this.tracking;
  }
}
