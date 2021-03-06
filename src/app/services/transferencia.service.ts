import { Transferencias } from './../../model/transferencia.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];
  private url = 'http://localhost:8080/transferencias'


  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  adicionar(transferencia:Transferencias): Observable<Transferencias>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencias>(this.url, transferencia);
  }

  todas(): Observable<Transferencias[]>{
    return this.httpClient.get<Transferencias[]>(this.url);
  }

  private hidratar(transferencia:any){
    transferencia.data = new Date();
  }

}
