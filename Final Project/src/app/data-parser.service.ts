import { Injectable } from '@angular/core';
import { Movies } from './summary/movies.model';

@Injectable()
export class DataParserService {
	  movies: Movies[] = [
	  new Movies('Madagascar', 5, 15),
	  new Movies('The Big Lebowski', 11, 34),
	  new Movies('21', 16, 54),
	  new Movies('Limitless', 15, 45),
	  new Movies('Inception', 10, 32),
	  ];
  constructor() { 
	console.log(this.movies);
  }
	getMostPopular() {
		var answer = "";
		var test = 0;
		for (var movie in this.movies) {
			var total = this.get2016Votes(this.movies[movie].title) + this.get2017Votes(this.movies[movie].title);
			if (total > test) {
				test = total;
				answer = this.movies[movie].title;
			}
		}
		return this.findByTitle(answer);
	}
	findByTitle(title : string) {
		for (var movie in this.movies) {
			if (this.movies[movie].title == title) {
				return this.movies[movie];
			}
		}
	}
	getLeastPopular() {
		var answer = "";
		var test = this.getMostPopular().votes2016 + this.getMostPopular().votes2017;
		for (var movie in this.movies) {
			var total = this.get2016Votes(this.movies[movie].title) + this.get2017Votes(this.movies[movie].title);
			if (total < test) {
				test = total;
				answer = this.movies[movie].title;
			}
		}
		return this.findByTitle(answer);
	}
	get2016VoteTotal() {
		var total = 0;
		for (var movie in this.movies) {
			total += this.movies[movie].votes2016;
		}
		return total;
	}
	get2017VoteTotal() {
		var total = 0;
		for (var movie in this.movies) {
			total += this.movies[movie].votes2017;
		}
		return total;
	}
	get2016Votes(title: string) {
		for (var movie in this.movies) {
			if (this.movies[movie].title == title) {
				return this.movies[movie].votes2016;
			}
		}
		return 0;
	}
	get2017Votes(title : string) {
		for (var movie in this.movies) {
			if (this.movies[movie].title == title) {
				return this.movies[movie].votes2017;
			}
		}
		return 0;
	}
	getAllVotes() {
		return this.get2016VoteTotal() + this.get2017VoteTotal();
	}
}
