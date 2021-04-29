import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AlertModule } from 'my-lib/alert/alert.module'; // 单个组件引入
import { MyLibModule } from 'my-lib'; // 组件库级引入
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AlertModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
