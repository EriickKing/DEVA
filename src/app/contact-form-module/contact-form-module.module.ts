import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponentComponent } from './contact-form-component/contact-form-component.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http.service';



@NgModule({
  declarations: [
    ContactFormComponentComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],

  exports: [
    ContactFormComponentComponent
  ]
})
export class ContactFormModuleModule {

  static forRoot(urlApi: string): ModuleWithProviders<ContactFormModuleModule> {
    return {
      ngModule: ContactFormModuleModule,
      providers: [
        { provide: 'URL_API', useValue: urlApi },
        HttpService
      ]
    }
  }
}
