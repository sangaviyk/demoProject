import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sustainabilityComponent } from './sustainability.component';

describe('sustainabilityComponent', () => {
  let component: sustainabilityComponent;
  let fixture: ComponentFixture<sustainabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sustainabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sustainabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
