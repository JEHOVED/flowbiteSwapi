import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../service/personajes.service';
import { IPersonaje } from '../../models/Personaje';
import { NgFor } from '@angular/common';
import { INave } from '../../models/Nave';
import { NavesServices } from '../../service/naves.service';

@Component({
  selector: 'app-listado-naves',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado-naves.component.html',
  styleUrl: './listado-naves.component.css'
})
export class ListadoNavesComponent implements OnInit {
  
  listaNaves : INave[] = [];
  
  titulo: string = "Naves";

  constructor(
    private servicio: NavesServices,

  ){}
  
  

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado(){
     this.servicio.getListado().subscribe((data) => {
       this.listaNaves = data.results;
       console.log("listado de naves a imprimir",this.listaNaves);
     })
  }


}
