import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  key = 'AIzaSyBtuv-WwvafRQWR8-9duC5ndH2aDvGgKPw';
  url = 'http://requirements-api.sandbox.joinsherpa.com/v2/entry-requirements'

  constructor(private http: HttpClient) { }

  getVisaInfo(citizenship, destination){
    return this.http.get(`${this.url}?citizenship=${citizenship}&destination=${destination}&language=en&key=${this.key}`);
  }
}
