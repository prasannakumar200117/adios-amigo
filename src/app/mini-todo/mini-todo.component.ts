import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-todo',
  templateUrl: './mini-todo.component.html',
  styleUrl: './mini-todo.component.css'
})
export class MiniTodoComponent {
  hut:string = ""
  stores:string[] = []
addtask(){
  if(this.hut.trim()){
    this.stores.push(this.hut);
    this.hut =""
  }
}

}
