import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCheckpointComponent } from './progress-checkpoint.component';

describe('ProgressCheckpointComponent', () => {
  let component: ProgressCheckpointComponent;
  let fixture: ComponentFixture<ProgressCheckpointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressCheckpointComponent]
    });
    fixture = TestBed.createComponent(ProgressCheckpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
