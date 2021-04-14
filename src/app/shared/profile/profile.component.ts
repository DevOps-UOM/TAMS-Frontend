import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Grade } from 'src/app/models/grade.model';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: Grade;
  private sub: Subscription;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private userServiceService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const userId = params['userid'];
      this.userServiceService.findOne(userId).subscribe({
        next: (data) => {
          this.user = data.data as Grade;
          console.log(this.user);
        },
        error: (err) => console.log(err),
        complete: () => console.log('Completed')
      });
   });

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
