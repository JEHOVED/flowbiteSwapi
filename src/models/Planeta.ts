import { IPersonaje } from "./Personaje";

export interface IPlaneta {
    id?: string;
    name: string;
    rotation_period: string; 
    orbital_period: string;
    surface_water: string;
    population: string;
    gravity: string;
    url: string;
    residents: IPersonaje[];
}