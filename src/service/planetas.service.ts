import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { IPlaneta } from '../models/Planeta';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {



  private readonly _http = inject(HttpClient);
  
  private apiUrl = 'https://swapi.dev/api'

  constructor(private http: HttpClient) { }

  getListado(): Observable<ApiResponse<IPlaneta[]>>{
    return this.http.get<ApiResponse<IPlaneta[]>>(this.apiUrl + '/planets');
    
  }
}
