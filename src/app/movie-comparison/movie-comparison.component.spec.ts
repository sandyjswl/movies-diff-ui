import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComparisonComponent } from './movie-comparison.component';

describe('MovieComparisonComponent', () => {
  let component: MovieComparisonComponent;
  let fixture: ComponentFixture<MovieComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
