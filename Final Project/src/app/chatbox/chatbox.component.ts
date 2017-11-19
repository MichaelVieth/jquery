import { Component, OnInit } from '@angular/core';
import { DataParserService } from '../data-parser.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
	data: {}[];
	chatOpen : any;
	
	constructor(private dataService: DataParserService) {
		this.chatOpen = true;
		this.data = [];
		this.data.push({type: "from", msg : "Hi there! Welcome to the chat bot."});
		this.data.push({type: "from", msg : "You mask ask the following questions:"});
		this.data.push({type: "from", msg : "How many people have voted?"});
		this.data.push({type: "from", msg : "How many total votes in 2016?"});
		this.data.push({type: "from", msg : "How many total votes in 2017?"});
		this.data.push({type: "from", msg : "What is the most popular movie?"});
		this.data.push({type: "from", msg : "What is the least popular movie?"});
		console.log(this.data);
	}
	isFrom(msgtype: string, msg : string) {
		if (msgtype == "from") {
			return true;
		}
		return false;
	}
	send(mesg : string) {
		this.data.push({type: "to", msg: mesg});
		switch(mesg) {
			case "How many people have voted?":
				this.data.push({type: "from", msg : "There are currently " + this.dataService.getAllVotes() + " votes."});
				break;
			case "How many total votes in 2016?":
				this.data.push({type: "from", msg : "There were " + this.dataService.get2016VoteTotal() + " votes in 2016."});
				break;
			case "How many total votes in 2017?":
				this.data.push({type: "from", msg : "There were " + this.dataService.get2017VoteTotal() + " votes in 2017."});
				break;
			case "What is the most popular movie?":
				var num = this.dataService.getMostPopular().votes2016 + this.dataService.getMostPopular().votes2017;
				this.data.push({type: "from", msg : "The most popular movie was " + this.dataService.getMostPopular().title + " with " + num + " votes."});
				break;
			case "What is the least popular movie?":
				var num = this.dataService.getLeastPopular().votes2016 + this.dataService.getLeastPopular().votes2017;
				this.data.push({type: "from", msg : "The least popular movie was " + this.dataService.getLeastPopular().title + " with " + num + " votes."});
				break;
			default:
		}
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
