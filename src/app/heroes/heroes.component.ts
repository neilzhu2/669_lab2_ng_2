import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  clickOrder(heroes: Hero[]): void {
    var buttonElem = document.querySelector('#orderButton');
    var buttonText = buttonElem.innerHTML;

    if(buttonText == "Order Alphabetically"){
      buttonElem.innerHTML = "Order By Id";
      heroes.sort((h1, h2) => h1.name > h2.name ? 1:-1)
    } else{
      buttonElem.innerHTML = "Order Alphabetically";
      heroes.sort((h1, h2) => h1.id > h2.id ? 1:-1)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
