import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehistoryComponent } from './updatehistory.component';

describe('UpdatehistoryComponent', () => {
  let component: UpdatehistoryComponent;
  let fixture: ComponentFixture<UpdatehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatehistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
