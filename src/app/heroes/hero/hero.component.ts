import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "spiderman"
  public age:  number = 17;

  // get es una propiedad que en realidad por debajo es un metodo
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = "Iron man"
  }

  changeAge(): void {
    this.age = 45
  }

  resetForm(): void {
    this.name = 'spiderman';
    this.age = 17;
  }

}
