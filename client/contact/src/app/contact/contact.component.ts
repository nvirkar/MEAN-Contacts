import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private cs: ContactService
  ) { }

  contacts
  first_name;
  last_name;
  phone;

  ngOnInit() {
    this.getContacts()

  }

  getContacts() {
    this.cs.getContacts().subscribe((data) => {
      console.log(data);
      this.contacts = data
    })
  }

  addContact() {
    if (this.first_name && this.last_name && this.phone) {
      let newContact = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone
      }
      this.cs.addContact(newContact).subscribe((data) => {
        console.log(data);
        this.contacts.push(newContact);
        this.first_name = '';
        this.last_name = '';
        this.phone = '';
      })
    }
    else {
      console.log('some data is missing');
    }

  }

  deleteContact(id) {
    this.cs.deleteContact(id).subscribe((data) => {
      console.log(data);
      for (var i = 0; i < this.contacts.length; i++) {
        if (id == this.contacts[i]["_id"]) {
          this.contacts.splice(i, 1)
        }
      }
    })
  }

}
