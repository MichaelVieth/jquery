import { Component, OnInit } from '@angular/core';

import { SearchhistoryService } from '../searchhistory.service';

@Component({
  selector: 'app-searchhistory',
  templateUrl: './searchhistory.component.html',
  styleUrls: ['./searchhistory.component.css']
})
export class SearchhistoryComponent implements OnInit {
	searchHistory: any;
  constructor(private searchhistoryService: SearchhistoryService) { }

  ngOnInit() {
    this.searchHistory = this.searchhistoryService.getData();
  }

}
