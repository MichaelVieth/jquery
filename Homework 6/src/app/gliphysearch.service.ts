import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GliphysearchService {
	static BASE_URL = 'https://api.giphy.com/v1/gifs/search';
	
	constructor(private http: Http) {
	}
	searchGliphy(query : string) {
		let params: string = [
			'api_key=3YJ4RLRatWGgYIegKQs0wF5ECZPks50U',
			'q=' + query,
			'limit=5',
			'offset=0',
			'rating=G',
			'lang=en',
			'origin=*'
		].join("&");
		const queryURL = `${GliphysearchService.BASE_URL}?${params}`;
		console.log(this.http.get(queryURL).toPromise().then((response) => response.json()));
		return this.http.get(queryURL).toPromise().then((response) => response.json());
	}

}
