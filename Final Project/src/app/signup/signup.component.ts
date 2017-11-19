import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	username: string;
	name: string;
	pass : string;
	email: string;
	address: string;
	profile: string;
  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
	register() {
		this.loginService.addUser(this.username, this.name, this.pass, this.email, this.address, this.profile);
		this.router.navigate(['/home'], {relativeTo: this.route});
	}
}
