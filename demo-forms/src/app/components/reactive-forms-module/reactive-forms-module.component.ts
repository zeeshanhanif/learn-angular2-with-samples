import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-module',
  templateUrl: './reactive-forms-module.component.html',
  styleUrls: ['./reactive-forms-module.component.css']
})
export class ReactiveFormsModuleComponent implements OnInit {

  myForm: FormGroup;
  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }

  onSubmit(value: String): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
