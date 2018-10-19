import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Norrisk2Component } from './norrisk2.component';

describe('Norrisk2Component', () => {
  let component: Norrisk2Component;
  let fixture: ComponentFixture<Norrisk2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Norrisk2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Norrisk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
