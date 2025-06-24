import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorgridComponent } from './calculatorgrid.component';

describe('CalculatorgridComponent', () => {
  let component: CalculatorgridComponent;
  let fixture: ComponentFixture<CalculatorgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorgridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
