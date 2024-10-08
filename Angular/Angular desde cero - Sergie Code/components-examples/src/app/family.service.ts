import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  hermanoGrande?: string;
  hermanoPequeño?: string;

  getHermanoGrande(): string {
    return this.hermanoGrande || '';
  }

  setHermanoGrande(hermano: string) {
    this.hermanoGrande = hermano;
  }

  getHermanoPequeño(): string {
    return this.hermanoPequeño || '';
  }

  setHermanoPequeño(hermano: string) {
    this.hermanoPequeño = hermano;
  }

  saludar(hermano: string){
    console.log('Hola ' + hermano);
  }

  preguntarPorHijo():string{
    return '¿Cómo está tu hijo?';
  }

  constructor() { }
}
