import { ComponentFixture, TestBed } from '@angular/core/testing';

import { School3V2Component } from './school3-v2.component';

describe('School3V2Component', () => {
  let component: School3V2Component;
  let fixture: ComponentFixture<School3V2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [School3V2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(School3V2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
