import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-search',
  templateUrl: './mini-search.component.html',
  styleUrl: './mini-search.component.css'
})
export class MiniSearchComponent {
  search : string  = "";
  items : string[] =['apple','banana','potato chips','jalebi','mysore pak'];
    filterItems(): string [] {
      return this.items.filter(item => item.toLowerCase().includes(this.search.toLowerCase()));
    }
  
}
