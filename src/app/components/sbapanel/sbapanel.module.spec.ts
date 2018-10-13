import { SBAPanelModule } from './sbapanel.module';

describe('SBAPanelModule', () => {
  let sBAPanelModule: SBAPanelModule;

  beforeEach(() => {
    sBAPanelModule = new SBAPanelModule();
  });

  it('should create an instance', () => {
    expect(sBAPanelModule).toBeTruthy();
  });
});
