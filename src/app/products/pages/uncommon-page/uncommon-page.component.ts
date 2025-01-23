import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  imports: [ PrimeNgModule ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18Select
  public name: string  = 'Fernando';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(): void{
    this.name = 'Amelia';
    this.gender = 'female';
  }
  //i18Plural
  public clients: string[] = ['dd','22','333','444','2222','22222','1']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  public onDeleteClient(): void {
    this.clients.pop();
  }

  //keyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log(value)),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa.')
    },3500)
  });
}
