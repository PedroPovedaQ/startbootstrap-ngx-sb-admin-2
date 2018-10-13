import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBAPanelComponent } from './sbapanel.component';

describe('SBAPanelComponent', () => {
  let component: SBAPanelComponent;
  let fixture: ComponentFixture<SBAPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBAPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBAPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
