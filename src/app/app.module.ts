import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // declarations es  donde van los componentes
    AppComponent,
  ],
  imports: [ // si tiene la palabra module va en imports
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
