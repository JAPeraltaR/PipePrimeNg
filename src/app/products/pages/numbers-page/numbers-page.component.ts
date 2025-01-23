import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-numbers-page',
  imports: [ PrimeNgModule ],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {
  public totalSells: number = 2112442412.41367;
  public percent: number = 0.243;
}
