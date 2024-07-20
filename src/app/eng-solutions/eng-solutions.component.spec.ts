import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngSolutionsComponent } from './eng-solutions.component';

describe('EngSolutionsComponent', () => {
  let component: EngSolutionsComponent;
  let fixture: ComponentFixture<EngSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
