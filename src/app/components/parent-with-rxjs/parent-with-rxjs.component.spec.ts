import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentWithRxjsComponent } from './parent-with-rxjs.component';

describe('ParentWithRxjsComponent', () => {
  let component: ParentWithRxjsComponent;
  let fixture: ComponentFixture<ParentWithRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentWithRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
