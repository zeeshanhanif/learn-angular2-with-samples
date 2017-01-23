import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.css']
})
export class FormModuleComponent implements OnInit {

  constructor() { 
    console.log("testing forms");

  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
  ngOnInit() {
  }

}
