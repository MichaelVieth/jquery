import { Component } from '@angular/core';
import { SearchhistoryComponent } from './searchhistory/searchhistory.component';


import { SearchhistoryService } from './searchhistory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
