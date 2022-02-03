import { Router } from '@angular/router';
import { Transferencias } from './../../model/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino:number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir(){
    console.log('solicatacao enviada');
    const valorEmitir: Transferencias  = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error)
    )

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
