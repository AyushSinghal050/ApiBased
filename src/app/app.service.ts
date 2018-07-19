import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: Http) { }
  getData() {
    console.log('Data Fetched');
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
}
}
