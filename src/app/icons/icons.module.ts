import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import {
  Search,
  RefreshCcw,
  Cloud,
  Thermometer,
  Droplet,
  Wind,
} from 'angular-feather/icons';

const icons = {
  Search,
  RefreshCcw,
  Cloud,
  Thermometer,
  Droplet,
  Wind,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
