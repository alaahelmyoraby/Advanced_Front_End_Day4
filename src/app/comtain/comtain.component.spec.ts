import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtainComponent } from './comtain.component';

describe('ComtainComponent', () => {
  let component: ComtainComponent;
  let fixture: ComponentFixture<ComtainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComtainComponent]
    });
    fixture = TestBed.createComponent(ComtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
