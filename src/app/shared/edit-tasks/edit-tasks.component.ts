import { TaskServiceService } from './../../services/task-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {

  tasks: any;
  displayTasks: any;

  constructor(
    public dialogRef: MatDialogRef<EditTasksComponent>,
    public TaskService: TaskServiceService
  ) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  onClose(){
    this.dialogRef.close();
  }

  loadTasks() {
    this.TaskService.getAllTask()
      .subscribe(
        res => {
          this.tasks = res.data;
          this.displayTasks =  this.tasks;
        },
        error => {

        }
      );
  }
  onDelete(id:string){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.TaskService.deleteTask(id).subscribe((res:any) => {
      this.loadTasks();
      alert("Deleted Successfully!");
    } );
    }

  }


}
