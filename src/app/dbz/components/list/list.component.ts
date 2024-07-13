import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Character } from '../../interfaces/character.interface'
import { retry } from 'rxjs';
@Component({
  selector: "dbz-list",
  templateUrl: "./list.component.html"
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()


  onDeleteCharacter(id?: string): void {

    if(!id) return

    this.onDelete.emit( id );
  }
}
