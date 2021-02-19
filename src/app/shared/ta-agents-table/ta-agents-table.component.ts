import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { FormControllService } from './../../services/form-controll.service';
import { Grade } from './../../models/grade.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ta-agents-table',
  templateUrl: './ta-agents-table.component.html',
  styleUrls: ['./ta-agents-table.component.css']
})
export class TaAgentsTableComponent implements OnInit {

  searchText: any;
  grades: Grade[] = this.formControllService.maxGrades;

  constructor(private formControllService: FormControllService, private http: HttpClient) {
    this.grades = this.formControllService.maxGrades;
   }

  ngOnInit(): void {

    this.http.get<{ status: string, msg: string, data: Grade[] }>('http://localhost:3000/marks/max').subscribe((postData) => {
      this.grades = postData['data'];
    });

    this.formControllService.updatedMaxgrade.subscribe((form: Grade) => {
      this.grades.push(form);
    });
  }

}










  

