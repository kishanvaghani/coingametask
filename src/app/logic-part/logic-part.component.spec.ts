import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicPartComponent } from './logic-part.component';

describe('LogicPartComponent', () => {
  let component: LogicPartComponent;
  let fixture: ComponentFixture<LogicPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
