import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetexamplePage } from './betexample.page';

describe('BetexamplePage', () => {
  let component: BetexamplePage;
  let fixture: ComponentFixture<BetexamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetexamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetexamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
