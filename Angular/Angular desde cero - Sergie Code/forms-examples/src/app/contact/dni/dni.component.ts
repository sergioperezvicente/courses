import { Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {

  @Input() typeDNI: string = 'DNI'
  documentForm: FormGroup;

  newVariable: string = 'DNI'

  constructor(private form: FormBuilder) {
    this.documentForm = this.form.group({
      dni: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.newVariable = changes?.['typeDNI'].currentValue
  } 

  hasErrors(controlName: string, errorType: string) {
    return (
      this.documentForm.get(controlName)?.hasError(errorType) &&
      this.documentForm.get(controlName)?.touched
    );
  }
}
