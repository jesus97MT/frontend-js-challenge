import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';

import { CustomBreakpointFacadeService } from './services/custom-breakpoint.facade.service';

@NgModule({
  imports: [LayoutModule],
  providers: [CustomBreakpointFacadeService],
})
export class AppLayoutModule {}
