import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppLayoutModule } from '../../shared/layout';
import { AppRoutingModule } from '../../app-routing.module';
import { MenuLargeComponent } from './components/menu-large/menu-large.component';
import { MenuMediumComponent } from './components/menu-medium/menu-medium.component';
import { MenuSmallComponent } from './components/menu-small/menu-small.component';

@NgModule({
  declarations: [MenuSmallComponent, MenuMediumComponent, MenuLargeComponent],
  imports: [CommonModule, AppLayoutModule, AppRoutingModule],
  exports: [MenuSmallComponent, MenuMediumComponent, MenuLargeComponent],
})
export class AppMenuModule {}
