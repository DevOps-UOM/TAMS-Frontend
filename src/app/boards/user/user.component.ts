import { Component, OnInit } from '@angular/core';
import { LayoutConfig } from 'src/app/models/layout.config';
import { LayoutConfigService } from 'src/app/services/layout-service/layout.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private configService: LayoutConfigService) { 
    this.configService.setConfig(new LayoutConfig(false,false));
  }

  ngOnInit(): void {
  }

}
