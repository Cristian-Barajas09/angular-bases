import {NgModule} from '@angular/core'
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],

  exports: [ // exportar componentes o cualquier cosa al mundo exterior
    CounterComponent
  ]
})
export class CounterModule {}
