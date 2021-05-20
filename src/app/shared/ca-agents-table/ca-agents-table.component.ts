import { Component, OnInit } from '@angular/core';

import { FormControllService } from './../../services/form-controll.service';
import { HttpClient } from '@angular/common/http';
import { Grade } from './../../models/grade.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ca-agents-table',
  templateUrl: './ca-agents-table.component.html',
  styleUrls: ['./ca-agents-table.component.css']
})
export class CaAgentsTableComponent implements OnInit {

  searchText: any;
  grades: Grade[] = this.formControllService.grades;

  constructor(private formControllService: FormControllService, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.grades = this.formControllService.grades;
  }

  ngOnInit(): void {
    this.http.get<{status: string, msg: string, data: Grade[]}>(environment.apiBaseUrl+'/ca-agents').subscribe((postData) => {
    this.grades = postData['data'];
    });


    this.formControllService.updatedgrade.subscribe((form: Grade) => {
      this.grades.push(form);
    });
  
  }

  navigateToProfile(userid) {
    this.router.navigate(['./' + userid], {relativeTo: this.activatedRoute});
  }
}

 
 
