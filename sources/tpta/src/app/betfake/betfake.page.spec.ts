import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetfakePage } from './betfake.page';

describe('BetfakePage', () => {
  let component: BetfakePage;
  let fixture: ComponentFixture<BetfakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetfakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetfakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
