import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact-form-component',
  templateUrl: './contact-form-component.component.html',
  styleUrls: ['./contact-form-component.component.scss']
})
export class ContactFormComponentComponent implements OnInit {
  public ContactForm!: FormGroup;
  private checkValid: boolean = false
  @Output() toggleEvent = new EventEmitter<boolean>()
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.form()
  }

  toggleModal() {
    this.toggleEvent.emit(false)
  }

  send() {
    console.log("SENT##");
    alert('SENT##, I`M GOING TO CLOSE THE MODAL')
    this.toggleModal()
    // this.httpService.SendData(this.ContactForm.value)
  }

  form() {
    this.ContactForm = new FormGroup({
      nameForm: new FormControl(null, Validators.required),
      emailForm: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      }),
      phoneForm: new FormControl(null, Validators.required),
      messageForm: new FormControl(null, Validators.required),
    })
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 32 && (charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }


  ngDoCheck() {

    if (this.ContactForm.valid) {
      if (!this.checkValid) {
        alert('SENT##, FORM VALID')
        // this.httpService.SendData(this.ContactForm.value)
        this.checkValid = true
      }
    }
  }

}
