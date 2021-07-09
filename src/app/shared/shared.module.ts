import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './pipes/converttospaces';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [ConvertToSpaces,
    StarComponent,],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, FormsModule, ConvertToSpaces, StarComponent]
})
export class SharedModule { }