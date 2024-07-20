import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalExpComponent } from './digital-exp.component';

describe('DigitalExpComponent', () => {
  let component: DigitalExpComponent;
  let fixture: ComponentFixture<DigitalExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalExpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
