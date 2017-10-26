import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WikisearchService {
	static BASE_URL = 'http://en.wikipedia.org/w/api.php';
	
	constructor(private http: Http) {
	}
	searchWiki(query : string) {
		console.log(query);
		let params: string = [
			`action=opensearch`,
			`format=json`,
			`search=` + query,
			`origin=*`
		].join("&");
		const queryURL = `${WikisearchService.BASE_URL}?${params}`;
		console.log(queryURL);
		console.log(this.http.get(queryURL).toPromise().then((response) => response.json()[1]));
		return this.http.get(queryURL).toPromise().then((response) => response.json()[1]);
	}
}