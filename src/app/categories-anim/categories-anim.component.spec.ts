import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAnimComponent } from './categories-anim.component';

describe('CategoriesAnimComponent', () => {
  let component: CategoriesAnimComponent;
  let fixture: ComponentFixture<CategoriesAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesAnimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
