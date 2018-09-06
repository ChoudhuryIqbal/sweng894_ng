import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IObject } from '../utils/interfaces';

@Injectable()
export class RestService {

	constructor(private http: HttpClient) { }

	get(url: string): Observable<any> {
		return this.http.get(url);
	}

	promiseGet(url: string, subject: BehaviorSubject<IObject>): Promise<any> {
		return new Promise((resolve, reject) => {
			this.get(url).subscribe(response => {
				if (response > 300) {
					subject.next({...response.body});
					resolve(response);
				} else {
					reject();
				}
			});
		});
	}
}