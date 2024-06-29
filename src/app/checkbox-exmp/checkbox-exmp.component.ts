import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-exmp',
  templateUrl: './checkbox-exmp.component.html',
  styleUrl: './checkbox-exmp.component.css',
})
export class CheckboxExmpComponent {
  showFavoriteMsg: boolean = false;
  selectedSnacks: string[] = [];

  snacks = [
    { name: 'chips', selected: false },
    { name: 'Nuts', selected: false },
    { name: 'Popcorn', selected: false },
    { name: 'Pretzels', selected: false },
    { name: 'Cookies', selected: false },
  ];

  updateSelectedSnacks() {
    this.selectedSnacks = this.snacks
      .filter((snack) => snack.selected)
      .map((snack) => snack.name);

    // this.showFavoriteMsg = this.selectedSnacks.length > 0;
    this.showFavoriteMsg = true;
  }
}
