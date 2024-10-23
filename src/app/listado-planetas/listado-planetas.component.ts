import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../service/personajes.service';
import { IPersonaje } from '../../models/Personaje';
import { NgFor } from '@angular/common';
import { IPlaneta } from '../../models/Planeta';
import { PlanetasService } from '../../service/planetas.service';

@Component({
  selector: 'app-listado-planetas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado-planetas.component.html',
  styleUrl: './listado-planetas.component.css'
})
export class ListadoPlanetasComponent implements OnInit {
  
  listaPlanetas : IPlaneta[] = [];
  
  titulo: string = "Planetas";

  constructor(
    private servicio: PlanetasService,

  ){}
  
  

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado(){
     this.servicio.getListado().subscribe((data) => {
       this.listaPlanetas = data.results;
       console.log("listado de planetas a imprimir",this.listaPlanetas);
     })
  }


}
