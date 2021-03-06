import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ObservablePlaygroundComponent } from './observable-playground/observable-playground.component';
import { SubjectPlaygroundComponent } from './subject-playground/subject-playground.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, Component1Component, Component2Component, ObservablePlaygroundComponent, SubjectPlaygroundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
