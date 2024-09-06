import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenLayoutComponent } from './kitchen-layout.component';

describe('KitchenLayoutComponent', () => {
  let component: KitchenLayoutComponent;
  let fixture: ComponentFixture<KitchenLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenLayoutComponent]
    });
    fixture = TestBed.createComponent(KitchenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
