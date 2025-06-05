import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';


@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  //atributo
  private apiUrl = "http://localhost:3007/curriculos"; //caminho da api

  constructor(private http: HttpClient) { }

  //métodos de conexão com a api

  //get - read
  getCurriculo(): Observable<Curriculo[]> { //responsável por traduzir as informações da api para o model
    return this.http.get<Curriculo[]>(this.apiUrl); //endereço da conexão e retorno da informação
  }

  //post - create
  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  //put - update
  atualizarCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const urlAtualizado = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlAtualizado, curriculo);
  }

  //delete - delete
  removerCurriculo(id: number): Observable<Curriculo[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(urlDeletar);
  }
}
