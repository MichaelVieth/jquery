import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	user : string;
	userInfo : any;
  constructor(private loginService: LoginService) { 
	this.user = this.getCookie("session");
  }
	getCookie(name :string) {
	  var value = "; " + document.cookie;
	  var parts = value.split("; " + name + "=");
	  if (parts.length == 2) return parts.pop().split(";").shift();
	}
  ngOnInit() {
	  this.userInfo = this.loginService.getUser(this.user);
  }
  saveChanges() {
	  this.loginService.updateUser(this.userInfo.name, this.userInfo.pass, this.userInfo.email, this.userInfo.address, this.userInfo.profileimg);
  }

}
