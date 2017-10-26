import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchhistoryComponent } from './searchhistory/searchhistory.component';

import { SearchhistoryService } from './searchhistory.service';
import { WikisearchService } from './wikisearch.service';
import { GliphysearchService } from './gliphysearch.service';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'searchhistory', component: SearchhistoryComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '*', redirectTo: '/'},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchhistoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes),
  ],
  providers: [SearchhistoryService, WikisearchService, GliphysearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
