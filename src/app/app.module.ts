import { CommonModule } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations:[ ],
  imports:[CommonModule, AppComponent],
  providers: [{
    provide: LOCALE_ID, useValue: 'en-US'
  }]
})
export class AppModule{

}
