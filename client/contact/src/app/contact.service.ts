import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }


  url = 'http://localhost:3000/api/'

  getContacts() {
    return this.http.get(this.url + 'contact')
  }

  addContact(newContact) {
    var headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    return this.http.post(this.url + 'contact', newContact, { headers })
  }

  deleteContact(id) {
    return this.http.delete(this.url + 'contact/' + id)
  }


}
