import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SBAPanelComponent } from './sbapanel.component';
import { SBAPanelHeaderComponent } from './sbapanel-header.component';
import { SBAPanelFooterComponent } from './sbapanel-footer.component';
const components = [ SBAPanelComponent, SBAPanelHeaderComponent, SBAPanelFooterComponent ];
@NgModule({
	imports: [ CommonModule ],
	declarations: components,
	exports: components
})
export class SBAPanelModule {}
