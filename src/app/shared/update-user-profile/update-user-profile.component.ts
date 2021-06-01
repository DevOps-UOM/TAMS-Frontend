// import { FormControllService } from './../../services/form-controll.service';
// import { UserServiceService } from './../../services/user-service/user-service.service';
// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-update-user-profile',
//   templateUrl: './update-user-profile.component.html',
//   styleUrls: ['./update-user-profile.component.css']
// })
// export class UpdateUserProfileComponent implements OnInit {

//   //@ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

//   // file: File = {
//   //   data: null,
//   //   inProgress: false,
//   //   progress: 0
//   // };

//   form: FormGroup;

//   //origin = this.window.location.origin;

//   constructor(
//     private formBuilder: FormBuilder,
//     //private authService: AuthenticationService,
//     private userService: UserServiceService,
//     private formControllService: FormControllService
//   ) { }

//   ngOnInit(): void {
//     this.form = this.formBuilder.group({
//       userid: ['', Validators.required],
//       email: ['', Validators.required],
//     });
//   }

//   //   this.authService.getUserId().pipe(
//   //     switchMap((id: number) => this.userService.findOne(id).pipe(
//   //       tap((user: User) => {
//   //         this.form.patchValue({
//   //           id: user.id,
//   //           name: user.name,
//   //           username: user.username,
//   //           profileImage: user.profileImage
//   //         })
//   //       })
//   //     ))
//   //   ).subscribe()
//   // }

//   // onClick() {
//   //   const fileInput = this.fileUpload.nativeElement;
//   //   fileInput.click();
//   //   fileInput.onchange = () => {
//   //     this.file = {
//   //       data: fileInput.files[0],
//   //       inProgress: false,
//   //       progress: 0
//   //     };
//   //     this.fileUpload.nativeElement.value = '';
//   //     this.uploadFile();
//   //   }
//   // }

//   // uploadFile() {
//   //   const formData = new FormData();
//   //   formData.append('file', this.file.data);
//   //   this.file.inProgress = true;

//   //   this.userService.uploadProfileImage(formData).pipe(
//   //     map((event) => {
//   //       switch (event.type) {
//   //         case HttpEventType.UploadProgress:
//   //           this.file.progress = Math.round(event.loaded * 100 / event.total);
//   //           break;
//   //         case HttpEventType.Response:
//   //           return event;
//   //       }
//   //     }),
//   //     catchError((error: HttpErrorResponse) => {
//   //       this.file.inProgress = false;
//   //       return of('Upload failed');
//   //     })).subscribe((event: any) => {
//   //       if(typeof (event) === 'object') {
//   //         this.form.patchValue({profileImage: event.body.profileImage});
//   //       }
//   //     })
//   // }

//   update() {
//     this.formControllService.updateAUser(this.form.getRawValue()).subscribe();
//   }

// }
