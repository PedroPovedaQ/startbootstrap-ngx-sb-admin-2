import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBAPanelHeaderComponent } from './sbapanel-header.component';

describe('SBAPanelHeaderComponent', () => {
  let component: SBAPanelHeaderComponent;
  let fixture: ComponentFixture<SBAPanelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBAPanelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBAPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
