import { Component, OnInit } from '@angular/core';
import { FormControllService } from '../../services/form-controll.service';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css']
})
export class AdminUserManagementComponent implements OnInit {
  title = 'user-register';
  constructor(private formControllService: FormControllService) { 

  }

  ngOnInit(): void {
  }

}
