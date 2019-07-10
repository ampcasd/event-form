import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionBaseComponent {

  @Input() public form: FormGroup;
  @Input() public submitted: boolean;

  hasError(formGroup: string, controlName: string): boolean {
    const formControl = this.form.controls[formGroup].get(controlName);
    return (
      formControl.errors !== null &&
      (formControl.dirty || this.submitted)
    );
  }

}
