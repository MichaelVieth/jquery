import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twobutton',
  templateUrl: './twobutton.component.html',
  styleUrls: ['./twobutton.component.css']
})
export class TwobuttonComponent implements OnInit {

	@Input() text1: string;
	@Input() text2: string;
	constructor() { }
	f1() {
		
	}
	f2() {
		
	}
	ngOnInit() {
	}

}
