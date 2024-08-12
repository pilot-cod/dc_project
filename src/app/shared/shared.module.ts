import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Nhập FormsModule
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule], // Nhập FormsModule
  exports: [InputComponent]
})
export class SharedModule { }
