import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  //atributo
  private apiUrl = "http://localhost:3007/vagas"; //caminho da api
  
  constructor(private http: HttpClient) { }

  //métodos de conexão com a api

  //get - read
  getVagas(): Observable<Vaga[]> { //responsável por traduzir as informações da api para o model
    return this.http.get<Vaga[]>(this.apiUrl); //endereço da conexão e retorno da informação
  }

  //post - create
  cadastrarVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  //put - update
  atualizarVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlAtualizado = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlAtualizado, vaga);
  }

  //delete - delete
  removerVaga(id: any): Observable<Vaga[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar);
  }
}
