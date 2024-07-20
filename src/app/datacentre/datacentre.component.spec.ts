import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacentreComponent } from './datacentre.component';

describe('DatacentreComponent', () => {
  let component: DatacentreComponent;
  let fixture: ComponentFixture<DatacentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatacentreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatacentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
