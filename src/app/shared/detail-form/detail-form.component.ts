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
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      mobile_number: new FormControl(''),
      city: new FormControl(''),
      district: new FormControl(''),
      province: new FormControl(''),
      bio: new FormControl(''),
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
        first_name: this.form.value.first_name,
        last_name: this.form.value.last_name,
        mobile_number: this.form.value.mobile_number,
        city: this.form.value.city,
        district: this.form.value.district,
        province: this.form.value.province,
        bio: this.form.value.bio,
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

}
