import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as faker from 'faker';

/*
  Generated class for the Agenda provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Agenda {

  constructor() {}

  getContacts():Contact[]{
    let contacts = [];
    for(let i=0; i< 500; i++){
      let contact:Contact ={
        name:faker.name.findName(),
        phone:faker.phone.phoneNumber(),
        imgUrl: faker.image.avatar()
      }
      contacts.push(contact);
    }

    contacts.sort((a:Contact, b:Contact)=>{
      if (a.name < b.name)
        return -1;
      if(a.name > b.name)
        return 1;
      else return 0;
    });
    

    return contacts;
  }

}

export interface Contact{
    name:string,
    phone:number,
    imgUrl:string  
}

