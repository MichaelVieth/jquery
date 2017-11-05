import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
	data: {}[];
	chatOpen : any;
	
	constructor() {
		this.chatOpen = true;
		this.data = [];
		this.data.push({type:"to", msg:"Hi there Mike!"});
		this.data.push({type: "from", msg : "Hi there!"});
		this.data.push({type: "to", msg : "Hi there Mike!"});
		this.data.push({type: "from", msg : "Hi there!"});
		this.data.push({type: "to", msg : "Hi there Mike!"});
		this.data.push({type: "from", msg : "Hi there!"});
		this.data.push({type: "to", msg : "Hi there Mike!"});
		this.data.push({type: "from", msg : "Hi there!"});
		this.data.push({type: "to", msg : "Hi there Mike!"});
		console.log(this.data);
	}
	isFrom(msgtype: string) {
		if (msgtype == "from") {
			return true;
		}
		return false;
	}
	send(mesg : string) {
		this.data.push({type: "to", msg: mesg});
	}
	isOpen() {
		return this.chatOpen;
	}
	toggleChat() {
		if (this.chatOpen == true) {
			this.chatOpen = false;
		} else {
			this.chatOpen = true;
		}
	}
	ngOnInit() {
	}

}
