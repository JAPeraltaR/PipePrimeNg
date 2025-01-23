
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

//configuracion de Locale del App
import localeEsPe from '@angular/common/locales/es-PE'
import localeEnGb from '@angular/common/locales/en-GB'
import localeFrCa from '@angular/common/locales/fr-CA'

import { CommonModule, registerLocaleData } from '@angular/common'


registerLocaleData(localeEsPe);
registerLocaleData(localeEnGb);
registerLocaleData(localeFrCa);

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ],
  exports: [
    ButtonModule,
    CommonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
