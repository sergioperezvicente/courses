import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css'],
})
export class BrotherComponent implements OnInit {
  nombre?: string;
  
  // constructor(private _Family: FamilyService) {}

  private _Family2 = inject(FamilyService);

  ngOnInit(): void {
    this._Family2.setHermanoPequeño('Pedro');
    this.nombre = this._Family2.getHermanoPequeño();
  }

  saludar(){
    this._Family2.saludar(this._Family2.getHermanoGrande() || '');
  }

  preguntar(){
    console.log(this._Family2.preguntarPorHijo())
  }

}
