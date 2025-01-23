import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-basics-page',
  imports: [ PrimeNgModule ],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameUpper:string = 'FerNando';
  public nameLower:string = 'FERnando';
  public nameTitle:string = 'fernanDO';

  public customDate: Date = new Date();
}
