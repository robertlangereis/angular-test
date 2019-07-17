import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceService {

  constructor() { 
    
  }
  getShoppingList(){
    return [
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
