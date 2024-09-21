import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCentralSidebarComponent } from './control-central-sidebar.component';

describe('ControlCentralSidebarComponent', () => {
  let component: ControlCentralSidebarComponent;
  let fixture: ComponentFixture<ControlCentralSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCentralSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCentralSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
