import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  email: string = '';
  isFocused: boolean = false;

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }


  form : FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    whatsappUpdates: [false],
    propertyName: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
   
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Handle form submission
    }
  }
}
