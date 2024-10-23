import { INave } from "./Nave";
import { IPlaneta } from "./Planeta";

export interface IPersonaje {
    id?: string;
    name: string;
    height: string; 
    hair_color: string;
    gender: string;
    homeworld: string;
    eye_color: string;
    url: string;
    vehicles: INave [];
    planets: IPlaneta[];
}