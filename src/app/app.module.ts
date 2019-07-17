import{NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent
  ],
  // je geeft aan - declared - wat voor type component je wilt gebruiken - in dit geval een AppComponent. 
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  // import the juiste modules die je nodig hebt
  bootstrap: [AppComponent]
  // bootstrap want de Appmodule is het allereerste wat wordt opgeroepen (gerenderd). ALs je een component start heb je ook de module nodig. Zonder module werkt de component niet. 
  // Module is een groep components. Module is bijv recepten (met allemaal components erin). Module is bijv qiri (met allemaal components erin).
  // Je begint vaak met een module die alles bevat. Later ga je dan splitsen als dit handig is.
})


export class AppModule{

}





// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
