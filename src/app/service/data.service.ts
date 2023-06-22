import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sdata='hello from service';
  constructor() { }
  method2(){
    alert('hi from ng service');
  }
}
