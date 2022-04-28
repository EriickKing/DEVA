import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material/material.module';
import { ContactFormModuleModule } from '../contact-form-module/contact-form-module.module';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    MaterialModule,
    ContactFormModuleModule,
    ContactFormModuleModule.forRoot('api.com/v1')
  ]
})
export class DataModule { }
