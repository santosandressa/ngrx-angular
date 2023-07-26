import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContadorComponent } from './display-contador.component';

describe('DisplayContadorComponent', () => {
  let component: DisplayContadorComponent;
  let fixture: ComponentFixture<DisplayContadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayContadorComponent]
    });
    fixture = TestBed.createComponent(DisplayContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
