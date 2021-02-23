import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormControllService } from '../../services/form-controll.service';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css'],
})
export class DetailFormComponent implements OnInit {
  form: FormGroup;
  formIsValid = false;
  recordSent = false;
  uuidValue: string;

  constructor(private formControllService: FormControllService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      userid: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
        //Validators.min(0),
        //Validators.max(100),
      
      //engMark: new FormControl('', [
        //Validators.required,
        //Validators.min(0),
        //Validators.max(100),
      //]),
      //sciMark: new FormControl('', [
        //Validators.required,
        //Validators.min(0),
        //Validators.max(100),
      //]),
      agentType: new FormControl(''), //agenttype
    });
    //this.formControllService.downloadDetails();
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
