import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
	constructor(private http: HttpClient) {};
	getData(): Observable<any[]> {
		let token = localStorage.getItem('token')
		return this.http.get('assets/menu.json')
			.map(response => {
				return response;
			});
	}
}
