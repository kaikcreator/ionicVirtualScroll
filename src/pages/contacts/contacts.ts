import { Component, OnInit } from '@angular/core';
import { Agenda, Contact } from "../../providers/agenda";

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage implements OnInit {

  public items:Array<Contact> = new Array<Contact>();

  constructor(public agenda: Agenda) {
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
