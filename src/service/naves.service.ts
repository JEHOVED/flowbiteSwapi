import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { INave } from '../models/Nave';

@Injectable({
  providedIn: 'root'
})
export class NavesServices {
  private readonly _http = inject(HttpClient);
  
  private apiUrl = 'https://swapi.dev/api'

  constructor(private http: HttpClient) { }

  getListado(): Observable<ApiResponse<INave[]>>{
    return this.http.get<ApiResponse<INave[]>>(this.apiUrl + '/vehicles');

  }

}