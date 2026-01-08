import { ComponentFixture, TestBed } from '@angular/core/testing';

import { School3Component } from './school3.component';

describe('School3Component', () => {
  let component: School3Component;
  let fixture: ComponentFixture<School3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [School3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(School3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
