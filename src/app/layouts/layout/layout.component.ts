import { Component, HostListener, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { DataService } from '../../services/data/data.service'
import { Subscription } from 'rxjs'
import { LayoutConfigService } from 'src/app/services/layout-service/layout.service';
import { GpsTrackService } from 'src/app/services/gps-track/gps-track.service';
import { User } from 'src/app/models/user.model';
import { Role } from 'src/app/models/role.model';
import { LayoutConfig } from 'src/app/models/layout.config';
import { UserService } from 'src/app/services/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  fontSize: number;
  viewInitAfter: boolean = false;

  isShowSidebar: boolean = false;
  subscription: Subscription;

  config: any
  user: User;

  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.viewInitAfter = true;
    this.cdr.detectChanges();
  }

  ngOnChange() {
    this.subscription = this.data.currentMessage.subscribe(isShowSidebar => this.isShowSidebar = isShowSidebar)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  private detectScreenSize() {
    if (window.innerWidth > 1024) {
      this.isDesktop = true;
      this.isTablet = false;
      this.isMobile = false;
      this.fontSize = 120;
    } else if (window.innerWidth > 600) {
      this.isDesktop = false;
      this.isTablet = true;
      this.isMobile = false;
      this.fontSize = 100;
    } else {
      this.isDesktop = false;
      this.isTablet = false;
      this.isMobile = true;
      this.fontSize = 80;
    }
  }


  constructor(
    private cdr: ChangeDetectorRef,
    private data: DataService,
    private configService: LayoutConfigService,
    private userService: UserService,
    public gpsTrackService: GpsTrackService,
  ) {
    this.config = configService.config;


  }

  ngOnInit(): void {
    this.detectScreenSize();
    //console.log("layout called")
    this.configService.configChangeListner.subscribe(config => {
      this.config = config.config;
    })
    this.showSideBar(this.isTablet || this.isDesktop);

    this.user = this.userService.getUserPayload();
    if (this.user != null && this.user.userid != null && this.user.role === Role.ta) {
      this.configService.setConfig(new LayoutConfig(true, false));
      console.log("tracking user")
      this.gpsTrackService.trackMe();
    } else if (this.user != null && this.user.userid != null) {
      this.configService.setConfig(new LayoutConfig(true, true));
    }

  }

  showSideBar(burgerBoolean: boolean) {
    this.isShowSidebar = burgerBoolean;

    this.data.showSidebar(this.isShowSidebar);
    //console.log(this.isShowSidebar);
  }
}
