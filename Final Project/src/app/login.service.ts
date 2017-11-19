import { Injectable } from '@angular/core';
import { Users } from './login/users.model';

@Injectable()
export class LoginService {
	users: Users[] = [
	new Users('morpheus', 'Michael Vieth', 'password', 'michael.vieth.pl@gmail.com', 'Chicago, IL', 'http://i0.kym-cdn.com/entries/icons/facebook/000/009/889/Morpheus2.jpg'),
	];
  constructor() { }
	addUser(username: string, name: string, pass : string, email: string, address: string, profile: string) {
		this.users.push(new Users(username, name, pass, email, address, profile));
		console.log(this.users);
	}
	updateUser(username: string, pass: string, email: string, address: string, profile: string) {
		for (var user in this.users) {
			if (this.users[user].username == username) {
				this.users[user].name = username;
				this.users[user].pass = pass;
				this.users[user].email = email;
				this.users[user].address = address;
				this.users[user].profileimg = profile;
			}
		}		
	}
	getUser(username: string) {
		for (var user in this.users) {
			if (this.users[user].username == username) {
				return this.users[user];
			}
		}
		return false;
	}
}
