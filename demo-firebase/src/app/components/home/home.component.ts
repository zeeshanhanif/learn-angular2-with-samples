import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.item = af.database.object('/data');
   }

  ngOnInit() {
  }

  save(newName: string){ 
    this.item.set({ name: newName}); 
  }

  update(newSize: string){ 
    this.item.update({ size: newSize}); 
  }

  delete(){ 
    this.item.remove();
  }

}
