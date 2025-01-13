import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracescategoriesComponent } from './tracescategories.component';

describe('TracescategoriesComponent', () => {
  let component: TracescategoriesComponent;
  let fixture: ComponentFixture<TracescategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracescategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracescategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
