import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, NgFor],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

  tarefa = "";
  itemsList = new Array<any>();

  bloquearAdd(){
    if (!this.tarefa){
      
    }
  }
  
  clearList(){
    this.itemsList.splice(0);''
  }

  clearInput(){
    (document.getElementById("input") as HTMLInputElement).value="";
  }

  addTarefa(){
    this.itemsList.push(this.tarefa);
    this.clearInput();
  };

  removerTarefa(i: any){
    this.itemsList.splice(i, 1);
  }

}
