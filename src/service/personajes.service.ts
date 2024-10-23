import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { IPersonaje } from '../models/Personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private readonly _http = inject(HttpClient);
  
  private apiUrl = 'https://swapi.dev/api'

  constructor(private http: HttpClient) { }

  getListado(): Observable<ApiResponse<IPersonaje[]>>{
    return this.http.get<ApiResponse<IPersonaje[]>>(this.apiUrl + '/people');

  }

}
