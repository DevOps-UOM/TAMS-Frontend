import { UserServiceService } from './../../services/user-service/user-service.service';
import { Grade } from './../../models/grade.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  user: Grade;
  private sub: Subscription;
  //user: Grade[] = this.userServiceService.user;

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


