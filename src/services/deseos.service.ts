import { Injectable } from '@angular/core';
import { Lista } from '../models';

@Injectable()

export class DeseosService {

    listas: Lista[] = [];

    constructor () {
      this.cargarStorage();

      //  const lista1 = new Lista('Recolectar piedras del infinito ');
      //  const lista2 = new Lista('Sacar la basura');

      //  this.listas.push(lista1, lista2);

      //  console.log(this.listas);
    }

    borrarLista( lista:Lista ) {
      this.listas = this.listas.filter( listaData => {
        return listaData.id !== lista.id
      });

      this.guardarStorage();
    }

    agregarLista( lista:Lista ) {
      this.listas.push( lista );
      this.guardarStorage();
    }

    guardarStorage() {
      localStorage.setItem('información', JSON.stringify( this.listas ));
      // Para pasar la lista a un string
    }

    cargarStorage() {
      if ( localStorage.getItem('información')){
        this.listas = JSON.parse(localStorage.getItem('información'));
      } else {
        this.listas = [];
      }

    }
}
