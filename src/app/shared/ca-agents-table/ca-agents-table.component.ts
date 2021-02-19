import { Component, OnInit } from '@angular/core';

import { FormControllService } from './../../services/form-controll.service';
import { HttpClient } from '@angular/common/http';
import { Grade } from './../../models/grade.model';

@Component({
  selector: 'app-ca-agents-table',
  templateUrl: './ca-agents-table.component.html',
  styleUrls: ['./ca-agents-table.component.css']
})
export class CaAgentsTableComponent implements OnInit {

  searchText: any;
  grades: Grade[] = this.formControllService.grades;

  constructor(private formControllService: FormControllService, private http: HttpClient) { 
    this.grades = this.formControllService.grades;
  }

  ngOnInit(): void {
    this.http.get<{status: string, msg: string, data: Grade[]}>('http://localhost:3000/marks').subscribe((postData) => {
    this.grades = postData['data'];
    });


    this.formControllService.updatedgrade.subscribe((form: Grade) => {
      this.grades.push(form);
    });
  
  }

}

 
 
