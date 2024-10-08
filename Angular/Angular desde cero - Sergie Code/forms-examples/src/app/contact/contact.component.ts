import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  typeDNI: string = 'DNI';
  viewDNI: boolean = false;

  constructor(private form: FormBuilder) {
    this.contactForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      typeDNI: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.contactForm.get('name')?.setValue('Sergio');
    this.contactForm.get('name')?.disable();
    this.contactForm.get('typeDNI')?.valueChanges.subscribe((value) => {
      this.viewDNI = value != '';
      this.typeDNI = value;
    });
  }

  ngOnDestroy(): void {
    console.log('Se destruyó el componente');
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.contactForm.get(controlName)?.hasError(errorType) &&
      this.contactForm.get(controlName)?.touched
    );
  }
  enviar() {
    console.log(this.contactForm);
  }
}
