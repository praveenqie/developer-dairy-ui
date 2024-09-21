import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCentralComponent } from './control-central.component';

describe('ControlCentralComponent', () => {
  let component: ControlCentralComponent;
  let fixture: ComponentFixture<ControlCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCentralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
