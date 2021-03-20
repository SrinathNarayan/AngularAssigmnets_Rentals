import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudulentDetailsComponent } from './fraudulent-details.component';

describe('FraudulentDetailsComponent', () => {
  let component: FraudulentDetailsComponent;
  let fixture: ComponentFixture<FraudulentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudulentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudulentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
