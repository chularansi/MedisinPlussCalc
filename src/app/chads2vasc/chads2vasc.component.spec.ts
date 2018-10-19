import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chads2vascComponent } from './chads2vasc.component';

describe('Chads2vascComponent', () => {
  let component: Chads2vascComponent;
  let fixture: ComponentFixture<Chads2vascComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chads2vascComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chads2vascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
