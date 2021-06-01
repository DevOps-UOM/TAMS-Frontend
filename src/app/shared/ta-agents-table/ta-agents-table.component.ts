import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { FormControllService } from './../../services/form-controll.service';
import { Grade } from './../../models/grade.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-ta-agents-table',
  templateUrl: './ta-agents-table.component.html',
  styleUrls: ['./ta-agents-table.component.css']
})
export class TaAgentsTableComponent implements OnInit {

  searchText: any;
  grades: Grade[] = this.formControllService.maxGrades;

  constructor(private formControllService: FormControllService, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,) {
    this.grades = this.formControllService.maxGrades;
   }

  ngOnInit(): void {

    this.http.get<{ status: string, msg: string, data: Grade[] }>(environment.apiBaseUrl+'/ta-agents').subscribe((postData) => {
      this.grades = postData['data'];
    });

    this.formControllService.updatedMaxgrade.subscribe((form: Grade) => {
      this.grades.push(form);
    });
  }

  navigateToProfile(userid) {
    this.router.navigate(['./' + userid], {relativeTo: this.activatedRoute});
  }

}










  

