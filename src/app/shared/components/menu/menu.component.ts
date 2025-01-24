
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar'
import { Router } from '@angular/router';



@Component({
  selector: 'shared-menu',
  imports: [ MenubarModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor( private routes: Router ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: 'letter'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'number'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            command: () => {
              this.routes.navigate(['/uncommon']);
            }
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink: 'custom',
        items: [
          {
            label: 'Otro Elemento',
            icon: 'pi pi-cog'
          },
        ]
      }
    ]
  }

}
