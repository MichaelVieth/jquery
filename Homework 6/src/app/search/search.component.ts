import { Component, OnInit } from '@angular/core';
import { SearchhistoryService } from '../searchhistory.service'
import { WikisearchService } from '../wikisearch.service'
import { GliphysearchService } from '../gliphysearch.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	
	search: any;
	searchResults: any;
	giphysearchResults: any;
  
	constructor(private searchHistoryService: SearchhistoryService, private wikiSearchService: WikisearchService, private gliphySearchService: GliphysearchService) { }


	searchFunction() {
		if (this.search.split(' ')[0] == "wiki") {
			this.wikiSearchService.searchWiki(this.search.substring(5)).then(Results => this.searchResults = Results);
			console.log(this.searchResults);
			this.searchHistoryService.appendHistory("Wiki Search : " + this.search + " : " + new Date()); 
		} else {
			this.gliphySearchService.searchGliphy(this.search.substring(6)).then(Results => this.giphysearchResults = Results.data);
			console.log(this.giphysearchResults);
			this.searchHistoryService.appendHistory("Giphy Search : " + this.search + " : " + new Date()); 
		}
	}
	
	ngOnInit() { }
}
