import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathiSerialsComponent } from './marathi-serials.component';

describe('MarathiSerialsComponent', () => {
  let component: MarathiSerialsComponent;
  let fixture: ComponentFixture<MarathiSerialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarathiSerialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathiSerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
