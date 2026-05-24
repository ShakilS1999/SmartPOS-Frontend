import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uesrs } from './uesrs';

describe('Uesrs', () => {
  let component: Uesrs;
  let fixture: ComponentFixture<Uesrs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uesrs],
    }).compileComponents();

    fixture = TestBed.createComponent(Uesrs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
