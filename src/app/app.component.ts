import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config'

import { ButtonModule } from 'primeng/button'

import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{

  constructor( private primeNgConfig: PrimeNG ){}

  ngOnInit(): void {
    this.primeNgConfig.ripple.set(true);
  }

  public title = '';
}
