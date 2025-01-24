
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar'
import { AvatarModule } from 'primeng/avatar'
import { TableModule } from 'primeng/table'

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
    AvatarModule,
    ButtonModule,
    CommonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    TableModule,
    ToolbarModule
  ],
  exports: [
    AvatarModule,
    ButtonModule,
    CommonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
