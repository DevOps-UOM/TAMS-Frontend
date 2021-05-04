import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILayoutConfig } from 'src/app/models/layout.config';

@Injectable({
  providedIn: 'root'
})
export class LayoutConfigService {

  static layoutCofig: ILayoutConfig = {
    toolBar: true,
    sideNav: true
  }

  constructor() { }

  get config() { return LayoutConfigService.layoutCofig }

  private notificationeSource = new Subject<{ config: ILayoutConfig }>();

  configChangeListner = this.notificationeSource.asObservable();

  public setConfig(config: ILayoutConfig): void {
    LayoutConfigService.layoutCofig = config
    this.notificationeSource.next({ config });
  }
}