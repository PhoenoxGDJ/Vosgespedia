import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTracesComponent } from './categories-traces.component';

describe('CategoriesTracesComponent', () => {
  let component: CategoriesTracesComponent;
  let fixture: ComponentFixture<CategoriesTracesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesTracesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesTracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
