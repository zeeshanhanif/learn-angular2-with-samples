import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  items: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.items = af.database.list("/item");
   }

  ngOnInit() {
  }

  updateItem(key: string, newText: string ){
    this.items.update(key,{text:newText});
  }
  deleteItem(key: string){
    this.items.remove(key);
  }
  addItem(newName : string){
    this.items.push({text: newName});
  }
  deleteEverything(){
    this.items.remove();
  }

}
