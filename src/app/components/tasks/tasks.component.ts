import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.service
      .deleteTask(task)
      .subscribe(() => (
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
    ),);
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.service.updateTask(task)
      .subscribe(

      );
  }

  addTask(task: Task) {
    this.service.addTask(task).subscribe((task)=> (this.tasks.push(task)))
  }
}
