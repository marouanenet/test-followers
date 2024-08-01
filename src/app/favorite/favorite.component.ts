import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'favorite',
  standalone: true,
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  imports: [CommonModule]
  // inputs : ['isFavorite'] : we can use it to declare inputs property but if we change the attr name we should chnage it here to 
})
export class FavoriteComponent {

  // alis is-fav
  @Input('is-fav')
  isFavorite : boolean = false; 
  @Output()
  change = new EventEmitter();

  toggleFavorite() {
    console.log("toggleFavorite clicked");
    this.isFavorite = !this.isFavorite;
    this.change.emit({newState : this.isFavorite});
  }  
}
