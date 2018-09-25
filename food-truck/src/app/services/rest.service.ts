import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IObject } from '../utils/interfaces';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RestService {

	constructor(private http: HttpClient) { }

	post(url: string, body: any): Observable<any> {
		return this.http.post<any>(url, body)
			.pipe(catchError(this.handleError<any>('post', [])));
	}

	get(url: string): Observable<any> {
		return this.http.get<any>(url)
			.pipe(catchError(this.handleError<any>('get', [])));
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

	private handleError<T> (operation='operation', result?: T){
		return ( error : any): Observable<T> => {
			console.error(error);
			return of(result as T);
		}
	}
}