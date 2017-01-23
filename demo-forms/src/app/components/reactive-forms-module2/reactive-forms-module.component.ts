import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-module',
  templateUrl: './reactive-forms-module.component.html',
  styleUrls: ['./reactive-forms-module.component.css']
})
export class ReactiveFormsModule2Component implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['',Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: String): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
