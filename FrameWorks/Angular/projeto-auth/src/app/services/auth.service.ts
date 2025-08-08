import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3007/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) {}

  // métodos
  //cadastrar o uruário no sistema
  registrar(usuario: any): Observable<any> {
    //verificar se usuario já existe (get -> email)
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      map((usuarios: string | any[]) => {
        //se usuário já existe
        if (usuarios.length > 0) {
          //lanço um erro para o sistema. 
          throw new Error('Usuário ja cadastrado');
        }
        return usuario;
      }),
      //caso o usuário não exista
      switchMap((novoUsuario: any) =>
        this.http
          .post(this.apiUrl, novoUsuario)
          .pipe(tap(() => alert('Registro realizado com sucesso')))
      ),
      //pegar erro de conexão
      catchError((err: { message: any; }) => {
        alert(`Erro: ${err.message}`);
        throw err;
      })
    );
  }
  //método para logar usuário já registrado 
  login(credenciais: any): Observable<boolean> {
    //passar para o banc uma busca com email e senha
    return this.http
      .get<any[]>(
        `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`
      )
      .pipe(
        map((usuarios: string | any[]) => {
          //não encontrado
          if (usuarios.length === 0) {
            return false;
          } else {
            //o usuário e sua chave de autenticação => localStorage
            const usuario = usuarios[0];
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario));
            return true; //deu certo -> pode avançar
          }
        })
      );
  }
  //deslogar o usuário
  logout() {
    //limpo o localStorage
    localStorage.removeItem(this.CHAVE_AUTH);
    //redirecionamento para outra página
    this.router.navigate(["/home"]);
  }

  // verificar se usuario já fez autenticação
  //(autorização do acesso)
  estaAutenticado(): boolean{
    //transformando uma a verificação da string em boolean
    return !! localStorage.getItem(this.CHAVE_AUTH);
  }

  // pegar os dados do usuário
  getUsuarioAtual():any{
    //quando eu armazeno no localStorage -> texto
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
  }

}
