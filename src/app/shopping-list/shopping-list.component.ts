import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

interface Grocery {
  name: string;
  quantity: number;
}

@Component({
  selector: "app-shopping-list",
  // als ie de 'app-shopping-list vind, dan render ik onderstaande templateUrl en styleUrl'
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  @Input() groceries: Grocery[];
  @Output() notify: EventEmitter<any> = new EventEmitter();
  constructor() {
    // this.groceries = []
    // (handleDelete)='handleDelete($event)'
  }

  ngOnInit() {}
  
  removeProductFromParentList(index: number){
    this.notify.emit(index)
    // this.groceries = this.groceries.pop()
    // = [...this.groceries, item]
  }
}
