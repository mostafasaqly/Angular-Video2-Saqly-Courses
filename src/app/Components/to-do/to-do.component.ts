import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  Title:string = "To Do List Application";
  imageLink:string= "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";

  tasks : string[] =[];
  newTask : string="";
  isAvalible : boolean = false;
  addTask()
  {
    if(this.newTask.trim() !=="")
    {
      this.tasks.push(this.newTask);
      this.newTask="";
      this.isAvalible = true;
    }

  }
  RemoveTask(index :number)
  {
    this.tasks.splice(index,1);
    this.isAvalible = this.tasks.length > 0;
  }
  // EditTask(index :number)
  // {
  //   let updateTask = prompt("Edit Task",this.tasks[index]);
  //   if(updateTask !==null)
  //   {
  //     this.tasks[index] = updateTask.trim();
  //   }
  // }
  EditTask(index:number, newtaskEdit:string) : string | void
  {
    const trimedTask = newtaskEdit.trim();
    if(newtaskEdit.trim() !== "")
    {
      this.tasks[index] = trimedTask;
    }
    else
    {
      newtaskEdit = this.tasks[index];
      return this.newTask = newtaskEdit;
    }
    this.newTask ="";
  }
}
