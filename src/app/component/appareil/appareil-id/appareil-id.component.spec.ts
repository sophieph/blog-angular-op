import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilIdComponent } from './appareil-id.component';

describe('AppareilIdComponent', () => {
  let component: AppareilIdComponent;
  let fixture: ComponentFixture<AppareilIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
