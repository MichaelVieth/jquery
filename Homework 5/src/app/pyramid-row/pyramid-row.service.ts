import { Injectable } from '@angular/core';
import { Animals } from '../pyramid/animals.model';

@Injectable()
export class PyramidRowService {
  pyramidRows: any;
  level: number;
  animals: Animals[] = [new Animals('lion', 1, 'http://whitelions.org/wp-content/uploads/2016/04/Mighty-Lion-watching-the-lionesses-Masai-Mara-Kenya.jpg'),
	new Animals('tiger', 1, 'https://kidssearch.com/picsearch/images/tiger-pic-1600x1000-e24adbb.png'),
	new Animals('shark', 1, 'https://metrouk2.files.wordpress.com/2014/06/shark-featured.png'),
	new Animals('zebra', 2, 'https://kidssearch.com/picsearch/images/zebra-pic-1024x768-c0a1ac6.png'),
	new Animals('moose', 2, 'https://www.nps.gov/lacl/learn/nature/images/Moose-page_-Image-w-cred-cap_-1200w_-Bull-Moose_2.jpg'),
	new Animals('seal', 2, 'http://elelur.com/data_images/mammals/seal/seal-03.jpg'),
	new Animals('deer', 3, 'https://static1.squarespace.com/static/56d45842d210b8b23f2230e4/t/586be4bb2e69cfdbc245bb00/1483465945753/deer.png?format=2500w'),
	new Animals('snake', 3, 'http://www.ecologyasia.com/images-papua-ng/lorias-forest-snake_0078a.jpg'),
	new Animals('salmon', 3, 'http://datanuggets.org/wp-content/uploads/2013/12/Cover_picture_Larson_2014.png'),
	new Animals('squirrel', 4, 'https://allthingswild.com/wp-content/uploads/2016/03/cute-squirrel-1200x640.png'),
	new Animals('turtle', 4, 'http://wobm.com/files/2017/06/Turtle.png?w=980&q=75'),
	new Animals('shrimp', 4, 'http://extension.msstate.edu/sites/default/files/newsletter-images/mississippi-marketmaker/vol7iss8fig2brownshrimp.png'),
	new Animals('grasshopper', 5, 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3k7kQua/green-grasshopper-jumping-summer-sunny-insect-cement_4bjot5unx__F0000.png'),
	new Animals('ant', 5, 'http://phenomena.nationalgeographic.com/files/2013/05/wild-ants.png'),
	new Animals('plankton', 5, 'http://www.uib.no/sites/w3.uib.no/files/styles/content_main/public/w2/da/daphnia.png?itok=3ybDf3YV'),];
  constructor() {}
  getPyramidRows() {
	this.pyramidRows = [[], [], [], [], []];
	for (var i = 1; i < 6; i++) {
		for (var animal in this.animals) {
			//console.log(this.animals[animal].pyramidLevel);
			if (this.animals[animal].pyramidLevel == i) {
				this.pyramidRows[i - 1].push(this.animals[animal]);
			}
		}
	}
    return this.pyramidRows;
  }
}