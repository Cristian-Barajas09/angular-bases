import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
// CommonModule es para usar ngIf y ngFor y  otras cosas
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
  exports: [
    ListComponent,
    HeroComponent,
  ],

  declarations: [
    ListComponent,
    HeroComponent,
  ],

  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
