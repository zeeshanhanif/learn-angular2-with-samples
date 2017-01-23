import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-twoway',
  templateUrl: './reactive-forms-twoway.component.html',
  styleUrls: ['./reactive-forms-twoway.component.css']
})
export class ReactiveFormsTwowayComponent implements OnInit {

  myForm: FormGroup;
  productName: String;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'productName': ['']
    });

  }

  onSubmit(value: String): void {
    console.log('you submitted value: ', value);
  }


  ngOnInit() {
  }

}
