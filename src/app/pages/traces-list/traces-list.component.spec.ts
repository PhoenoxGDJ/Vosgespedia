import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracesListComponent } from './traces-list.component';

describe('TracesListComponent', () => {
  let component: TracesListComponent;
  let fixture: ComponentFixture<TracesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
