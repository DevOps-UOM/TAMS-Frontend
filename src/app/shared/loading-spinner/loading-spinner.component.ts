import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner/loading-spinner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  
  showSpinner:boolean = false;
  
  constructor(private spinnerService:LoadingSpinnerService,private cdRef:ChangeDetectorRef) {
    
   }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status)=>{
      if(status==="start"){
        this.showSpinner=true;
      }else{
        this.showSpinner=false;
      }
      
       this.cdRef.detectChanges();
    })
  }

}
