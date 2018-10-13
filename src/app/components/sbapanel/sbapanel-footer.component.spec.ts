import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBAPanelFooterComponent } from './sbapanel-footer.component';

describe('SBAPanelFooterComponent', () => {
  let component: SBAPanelFooterComponent;
  let fixture: ComponentFixture<SBAPanelFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBAPanelFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBAPanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
