import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {
  @Output() messageFromSon = new EventEmitter<string>();
  @Output() incrementarFromSon = new EventEmitter<void>();
  @Output() decrementarFromSon = new EventEmitter<void>();

  message: string = '';

  sendMessage(){
    this.messageFromSon.emit(this.message)
  }

  incrementar(){
    this.incrementarFromSon.emit();
  }
  decrementar(){
    this.decrementarFromSon.emit();
  }
}