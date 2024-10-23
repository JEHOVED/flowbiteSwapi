import { IPersonaje } from "./Personaje";

export interface INave {
    id?: string;
    name: string;
    model: string; 
    manufacturer: string;
    max_atmosphering_speed: string;
    passengers: string;
    cargo_capacity: string;
    url: string;
    pilots: IPersonaje[];
}