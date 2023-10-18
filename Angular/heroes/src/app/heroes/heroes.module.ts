import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { caracterePipe } from './caractere.pipe';

@NgModule({
  declarations: [
    HeroListComponent,
    caracterePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeroListComponent
  ]
})
export class HeroesModule { }
