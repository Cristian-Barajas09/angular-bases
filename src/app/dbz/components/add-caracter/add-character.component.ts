import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: "dbz-add-character",
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {
  @Output() // es como un event dispatch de svelet
  // quiere decir que el espera una funcion
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    // debugger; -> parar la ejecución

    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0}
  }
}
