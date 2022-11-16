import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AddButtonComponent } from './add-button/add-button.component';
import { AnalyzeComponent } from './analyze/analyze.component'; 
import { HttpClientModule } from '@angular/common/http';
import { InputFieldComponent } from './input-field/input-field.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AddButtonComponent,
    AnalyzeComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
     ReactiveFormsModule,
     MatIconModule,
     MatInputModule,
     HttpClientModule,
     
     
     



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
