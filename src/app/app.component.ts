import { Component, OnInit } from "@angular/core";
// import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { componentFactoryName } from "@angular/compiler";
import { ShoppingListServiceService } from './shopping-list-service.service';
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
      <app-shopping-list 
      [groceries]="groceries"
      (notify)=handleDelete($event)
      > </app-shopping-list>

      <div class="knoppies">
      New item for grocerieslist
        <input type="text" #name />
        </div>
        <div class="knoppies">
        With quantity 
        <input class="value"type="number" #quantity />
        </div>
        <div class="knoppies">
        <button (click)="handleClick(name.value, quantity.value)">
        Add new item
        </button>
        </div>
        <div class="knoppies">
        <br><br/>
        {{condition}}
        <div *ngIf="show">We added to added {{ quantity.value }} fresh {{ name.value }} to your shoppinglist.</div>
        </div>
    </div>
  `
})

// (input)="handleClick($event.target.value)">

//#ref is een soort id waar je dan naar kan refereren

// ng-template

// ng-if gebruik je bijv om te kijken of bepaalde data er al is. Dus het is een beetje de button && buttonComponent wat je hebt in react
//[(ngModel)] is two way data binding. Voor voorbeelden een best practice - maar voor de rest zou je liever one-way binding hebben, om het clean te houden
export class AppComponent implements OnInit{
  constructor(private shoppingList: ShoppingListServiceService) {
  }
  ngOnInit(){
    this.groceries = this.shoppingList.getShoppingList()
  }
  groceries: any;

  show: boolean = false;
  
  handleDelete(i: number){
    this.groceries.splice(i, 1)
    // = [...this.groceries, item]
  }

  handleClick(name, quantity) {
    const item: Grocery = {
      name: name,
      quantity: quantity
    };
    // console.log(quantity)
    this.groceries = [...this.groceries, item];
  }
}  // // bovenstaande is event biding

// <div>

//       {{ numberOne + numberTwo }}
//       </div>
//       <div>
//       {{ isHappy ? ':)': ':('}}
//       </div>

// down from class and binds to the content.
