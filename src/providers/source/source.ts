import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detail} from "../../detail";
/*
  Generated class for the SourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SourceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SourceProvider Provider');
  }
  getSource(){
    return this.http.get<Detail[]>('/assets/data.json');

  }
}
