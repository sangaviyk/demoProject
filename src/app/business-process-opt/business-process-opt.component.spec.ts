import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProcessOptComponent } from './business-process-opt.component';

describe('BusinessProcessOptComponent', () => {
  let component: BusinessProcessOptComponent;
  let fixture: ComponentFixture<BusinessProcessOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessProcessOptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessProcessOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
