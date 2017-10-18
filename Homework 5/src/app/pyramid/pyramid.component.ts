import { Component, OnInit } from '@angular/core';
import { PyramidRowService } from '../pyramid-row/pyramid-row.service';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  animals = [];
  constructor(private pyramidRows: PyramidRowService) { }

  ngOnInit() {
	  this.animals = this.pyramidRows.getPyramidRows();
	  console.log(this.animals);
  }

}
