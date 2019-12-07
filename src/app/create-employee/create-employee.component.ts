import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  companies: Array<any> = [{ id: "1", name: "AF" }, { id: "2", name: "Maestral Tech" }, { id: "3", name: "Apple" }, { id: "4", name: "Google inc" }];
  emplyoeeInfoForm: FormGroup;

  constructor(protected formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeCreateEmployeeForm();
  }

  initializeCreateEmployeeForm(): void {
    this.emplyoeeInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    }
    );
  }

  continueToCreateCompany() {
  }

}
