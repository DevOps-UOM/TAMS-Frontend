import { Component, OnInit } from '@angular/core';
import { FormControllService } from '../../services/form-controll.service';

@Component({
  selector: 'app-ca-user-management',
  templateUrl: './ca-user-management.component.html',
  styleUrls: ['./ca-user-management.component.css']
})
export class CaUserManagementComponent implements OnInit {

  constructor(private formControllService: FormControllService) { }

  ngOnInit(): void {
  }

}




