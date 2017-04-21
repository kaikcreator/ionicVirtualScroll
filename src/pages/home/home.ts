import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Agenda, Contact } from "../../providers/agenda";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public items:Array<Contact> = new Array<Contact>();

  constructor(public navCtrl: NavController, public agenda: Agenda) {
  }

  ngOnInit(){
    this.items = this.agenda.getContacts();
  }

  checkInitialChange(item, itemIndex, items){
    if(itemIndex == 0)
      return item.name[0];

    if(item.name[0] != items[itemIndex-1].name[0])
      return item.name[0];
    
    return null;
  }

}
