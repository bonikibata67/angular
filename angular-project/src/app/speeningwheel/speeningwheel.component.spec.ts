import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeeningwheelComponent } from './speeningwheel.component';

describe('SpeeningwheelComponent', () => {
  let component: SpeeningwheelComponent;
  let fixture: ComponentFixture<SpeeningwheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeeningwheelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeeningwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
