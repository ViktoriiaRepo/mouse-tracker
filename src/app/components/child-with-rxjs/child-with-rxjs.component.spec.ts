import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithRxjsComponent } from './child-with-rxjs.component';

describe('ChildWithRxjsComponent', () => {
  let component: ChildWithRxjsComponent;
  let fixture: ComponentFixture<ChildWithRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildWithRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
