import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnpipesComponent } from './ownpipes.component';

describe('OwnpipesComponent', () => {
  let component: OwnpipesComponent;
  let fixture: ComponentFixture<OwnpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnpipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
