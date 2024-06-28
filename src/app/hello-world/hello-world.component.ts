import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
value = '';
value1 = '';
handleInput(event:any) {
this.value = (event.target as HTMLInputElement).value;
}
}
