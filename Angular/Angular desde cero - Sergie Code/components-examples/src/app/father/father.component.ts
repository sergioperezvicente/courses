import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements OnInit {
  
  nombre?: string;
  fecha: Date = new Date();
  
  constructor(private _Family: FamilyService) {}

  ngOnInit(): void {
    this._Family.setHermanoGrande('Juan');
    this.nombre = this._Family.getHermanoGrande();
  }

  saludar(){
    this._Family.saludar(this._Family.getHermanoPequeño() || '');
  }

  preguntar(){
    console.log(this._Family.preguntarPorHijo())
  }

}
