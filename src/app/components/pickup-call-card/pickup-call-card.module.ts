import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    PickupCallCardComponent
  ],
  declarations: [PickupCallCardComponent]
})
export class PickupCallCardModule {}