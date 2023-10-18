import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { fobiddenNameValidatior } from '../forbiddenName.directive';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  x:string = 'Ceci est un test pour la variable !'
  isDisplayed:boolean = false;
  heroArray: Array<Hero> = new Array<Hero>();
  count:number = 0;
  private _title:string = "I love Angular";
  currentDate:Date = new Date();
  profileForm = this.fb.group({
    nom: ['lay', [Validators.required, Validators.minLength(4), fobiddenNameValidatior(/bob/i)]],
    prenom: [''],
    age: [0],
  });
  data : {nom:string|null, prenom:string|null, age:number|null} = {nom: 'lay', prenom:'julien', age:22};

  ngOnInit(): void {
    setTimeout(() => this.changeDisplay(), 5000)
    this.heroArray.push(new Hero(1, 'Batman', 100));
    this.heroArray.push(new Hero(2, 'Superman', 200));
    this.heroArray.push(new Hero(3, 'Pacman', 300));
    this.profileForm.patchValue(this.data);
  }

  changeDisplay() {
    this.isDisplayed = !this.isDisplayed;
  }

  onButtonClicked(event: Event, nbToAdd: number) {
    this.count += nbToAdd;
  }

  get title() {
    return this._title;
  }

  set title(val:string) {
    this._title = val;
  }

  constructor(private fb: FormBuilder) {}

  changeValues() {
    this.data = {...this.data, ...this.profileForm.value}
    console.log(this.data);
  }
}
