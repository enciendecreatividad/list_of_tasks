import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Input() index;
  chkItem: FormControl;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.chkItem = new FormControl(this.item.state);
    this.chkItem.valueChanges.subscribe(chkState => {
        this.changeState(chkState);
    })
  }

  deleteItem(itemId: string){
    this.itemService.delete(itemId);
  }

  changeState(chkState: boolean){
    this.itemService.changeState(this.item.id, chkState);
  }

}
