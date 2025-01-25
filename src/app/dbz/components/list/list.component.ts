import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] =
    [
      {
        name: 'Trunks',
        power: 10
      }
    ]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    //TODO Emitir el ID del personaje
    this.onDelete.emit(index);
  }

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id: string): void {
    //TODO Eliminar por el uuid
    this.onDeleteById.emit(id);
  }
}
