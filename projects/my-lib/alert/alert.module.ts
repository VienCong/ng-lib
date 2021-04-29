import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule],
  exports: [
    AlertComponent // 必要的导出
  ],
  providers: [],
})
export class AlertModule { }