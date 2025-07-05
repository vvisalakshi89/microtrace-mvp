import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceDashboardComponent } from './trace-dashboard.component';

describe('TraceDashboardComponent', () => {
  let component: TraceDashboardComponent;
  let fixture: ComponentFixture<TraceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraceDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
