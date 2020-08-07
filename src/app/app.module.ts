import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxBootstrapMultiselectDropdownModule } from 'ngx-bootstrap-multiselect-dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxBootstrapMultiselectDropdownModule,
    NgMultiSelectDropDownModule.forRoot(),
    TypeaheadModule.forRoot()    
  ],
  
  declarations: [ 
    AppComponent,
    HelloComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
