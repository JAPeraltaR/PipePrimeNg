import { Component } from '@angular/core';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { ToggleCasePipe } from '../pipes/toggle-case.pipe';
import { Hero, Color } from '../interfaces/hero.interfaces';
import { CanFlyPipe } from '../pipes/con-fly.pipe';
import { SortByPipe } from '../pipes/sort-by.pipe';


@Component({
  selector: 'app-order',
  imports: [ PrimeNgModule, ToggleCasePipe, CanFlyPipe, SortByPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public orderBy?: keyof Hero;

  public heores: Hero[] = [
    {
      name:   'Superman',
      canFly: true,
      color:  Color.blue
    },
    {
      name:   'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name:   'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name:   'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name:   'LinternaVerde',
      canFly: true,
      color: Color.green
    }
  ]

  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value : keyof Hero): void {
    this.orderBy = value;
  }

}
