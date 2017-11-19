import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

declare let gtag: Function;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: any;
	pass: any;
	loginattempts: number;
	message : any;
	constructor(private router: Router, private route: ActivatedRoute) { 
		this.loginattempts = 0;
	}

	ngOnInit() {
	}
	loginFunction() {
		if (this.loginattempts <= 5) {
			if (this.username == "morpheus" && this.pass != "password") {
				this.loginattempts += 1;
				this.message = "Incorrect login attempts: " + this.loginattempts;
			} else {
				document.cookie =`session=${this.username}`;
				this.router.navigate(['/profile'], {relativeTo: this.route});
				window.location.reload();
				gtag('event', 'user-login', { event_category: 'csc436' });
			}
		} else {
			this.message = "Your account is locked out.";
		}
	}
	getCookie(name :string) {
	  var value = "; " + document.cookie;
	  var parts = value.split("; " + name + "=");
	  if (parts.length == 2) return parts.pop().split(";").shift();
	}
	signup() {
		this.router.navigate(['/signup'], {relativeTo: this.route});
		window.location.reload();		
	}
	isAuthd() {
		if (this.getCookie("session") != "" && this.getCookie("session") != null) {
			return true;
		}
		return false;
	}
}
