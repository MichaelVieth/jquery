import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	cookie : string;
  constructor() {
	this.cookie = this.getCookie("session");
	if (this.cookie == "") {
		this.cookie = null;
	}
  }
	isCookieSet() {
		return this.cookie;
	}
	getCookie(name :string) {
	  var value = "; " + document.cookie;
	  var parts = value.split("; " + name + "=");
	  if (parts.length == 2) return parts.pop().split(";").shift();
	}
  ngOnInit() {
  }

}
