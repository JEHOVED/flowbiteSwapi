import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../service/personajes.service';
import { IPersonaje } from '../../models/Personaje';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listado-personajes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado-personajes.component.html',
  styleUrl: './listado-personajes.component.css'
})
export class ListadoPersonajesComponent implements OnInit {
  
  listaPersonajes : IPersonaje[] = [];
  
  titulo: string = "Personajes";

  constructor(
    private servicioPersonajes: PersonajesService,

  ){}
  
  

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado(){
     this.servicioPersonajes.getListado().subscribe((data) => {
       this.listaPersonajes = data.results;
       console.log("listado de usuarios a imprimir",this.listaPersonajes);
     })
  }


}
