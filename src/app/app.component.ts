import { Component } from "@angular/core";
import { componentFactoryName } from "@angular/compiler";
// je maakt custom HTML element, waar JS dan mee aan de slag gaat en weet wat daar moet komen

interface Grocery {
  name: string;
  quantity: number;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
    
    
      <div>
        Groceries:
        <ul>
          <li *ngFor="let grocery of groceries; let i=index;">
            {{grocery.quantity}} x {{grocery.name}}
          </li>
        </ul>
      </div>


      New item for grocerieslist
      <div>
        <input 
        type="text"
        #name
        >
        
        New item to added to groceries ...{{ name.value }}
      </div>
        

      <input 
      type="number"
      #quantity
      >
      
      Quantity of new item: {{ quantity.value }}
      <button (click)="handleClick(name.value, quantity.value)">Add new item</button>  
      

      `
})

// (input)="handleClick($event.target.value)">

//#ref is een soort id waar je dan naar kan refereren

// ng-template

// ng-if gebruik je bijv om te kijken of bepaalde data er al is. Dus het is een beetje de button && buttonComponent wat je hebt in react
//[(ngModel)] is two way data binding. Voor voorbeelden een best practice - maar voor de rest zou je liever one-way binding hebben, om het clean te houden
export class AppComponent {
  groceries: Grocery[];

  // handleInput(event: any){
  //   this.item = event.target.value;
  // }
  // // handleChange(value: string){
  // //   this.groceries = value;
  // // }

  handleClick(name, quantity) {
    const item: Grocery = {
      name: name,
      quantity: quantity
    };
    // console.log(quantity)
    this.groceries = [...this.groceries, item];
  }
  // // bovenstaande is event biding

  constructor() {
    this.groceries = [
      {
        name: "Banaan",
        quantity: 2
      },
      {
        name: "Appel",
        quantity: 3
      }
    ];
  }
}

// <div>

//       {{ numberOne + numberTwo }}
//       </div>
//       <div>
//       {{ isHappy ? ':)': ':('}}
//       </div>

// down from class and binds to the content.
