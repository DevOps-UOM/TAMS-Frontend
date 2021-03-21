import { Component, HostListener, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

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


  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.viewInitAfter = true;
    this.cdr.detectChanges();
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
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.detectScreenSize();
  }

}
