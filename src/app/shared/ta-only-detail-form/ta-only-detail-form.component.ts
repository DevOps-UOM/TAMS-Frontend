import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormControllService } from '../../services/form-controll.service';

@Component({
  selector: 'app-ta-only-detail-form',
  templateUrl: './ta-only-detail-form.component.html',
  styleUrls: ['./ta-only-detail-form.component.css']
})
export class TaOnlyDetailFormComponent implements OnInit {

  form: FormGroup;
  formIsValid = false;
  recordSent = false;
  uuidValue: string;


  constructor(private formControllService: FormControllService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userid: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      agentType: new FormControl(''), //agenttype
    });
  }


  OnSubmit() {
    if (this.form.valid) {
      this.formIsValid = false;
      this.recordSent = true;
      const totalMark = this.form.value.agentType;

      this.form.patchValue({ agentType: totalMark });

      const formData = {
        userid: this.form.value.userid,
        email: this.form.value.email,
        //engMark: this.form.value.engMark,
        //sciMark: this.form.value.sciMark,
        agentType: this.form.value.agentType,
      };

      this.formControllService.uploadDetails(formData);
      this.form.reset();
    } else {
      this.formIsValid = true;
      this.recordSent = false;
      return;
    }
  }

  //generateUUID(){
  //this.uuidValue=UUID.UUID();
  //return this.uuidValue;
  //}
}

