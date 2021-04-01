import { from } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskServiceService,
    public dialogRef: MatDialogRef<AddTaskComponent>
  ) { }

  ngOnInit(): void {
    this.formInstaller();
  }

  formInstaller(): void {
    this.taskForm = this.fb.group({
      note: ['', Validators.required],
      task_name: ['', Validators.required],
      task_duration: ['', Validators.required]
    });
  }

  onAddTask() {
    console.log(this.taskForm.value);
    this.taskService.createTask(this.taskForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.dialogRef.close()
        }, error => {
          console.log(error);
        }
      );
    this.taskForm.reset();
    }
  
  onClose(){
    this.dialogRef.close();
  }

    }
