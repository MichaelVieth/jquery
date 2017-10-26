import { Injectable } from '@angular/core';

@Injectable()
export class SearchhistoryService {
	private searchHistory: string[] = [];
	constructor() { }

	appendHistory(search: string) {
		this.searchHistory.push(search);
	}
	
	getData() {
		return this.searchHistory;
	}
}
