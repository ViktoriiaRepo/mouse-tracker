import {
  Component,
  Input,
  HostListener,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() x!: number;
  @Input() y!: number;

  @HostBinding('class.mouse-over') isMouseOver = false;

  @HostListener('mouseover') onMouseOver() {
    console.log('Mouse is over the child component');
    this.isMouseOver = true;
  }

  @HostListener('mouseout') onMouseOut() {
    console.log('Mouse is no longer over the child component');
    this.isMouseOver = false;
  }
}
