import { Component, OnInit } from '@angular/core';
import { Movies } from './movies.model';
import { DataParserService } from '../data-parser.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
	summary : string;
	constructor(private dataService: DataParserService) {
		this.generateSummary();
	}

  ngOnInit() {
  }
	generateSummary() {
		var num = this.getMostPopular().votes2016 +this.getMostPopular().votes2017;
		var num1 = this.getLeastPopular().votes2016 +this.getLeastPopular().votes2017;
		this.summary = "There are currently " + this.getAllVotes() + " votes in for movies listed on our site. The total votes in 2016 was " + this.get2016VoteTotal() +". The total votes in 2017 were " + this.get2017VoteTotal() + ". The least popular movie was " + this.getLeastPopular().title + " with " + num1 + " votes. The most popular movie was " + this.getMostPopular().title + " with " + num + "votes.";
	}
	getMostPopular() {
		return this.dataService.getMostPopular();
	}
	getLeastPopular() {
		return this.dataService.getLeastPopular();
	}
	get2016VoteTotal() {
		return this.dataService.get2016VoteTotal();
	}
	get2017VoteTotal() {
		return this.dataService.get2017VoteTotal();
	}
	getAllVotes() {
		return this.dataService.getAllVotes();
	}
}
