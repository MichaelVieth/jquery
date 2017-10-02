import { Component } from '@angular/core';
import { Patients } from './patients.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  /*{firstName: 'steve', lastName: 'jobs', emailAddress: 'steve.jobs@apple.com', doctorLastName: ' johnson'} */
  patients: Patients[] = [
	new Patients('steve', 'jobs', 'steve.jobs@apple.com', 'johnson'),
	new Patients('chuck', 'hulse', 'chuck.hulse@apple.com', 'smith'),
	new Patients('harold', 'henkle', 'harold.henkle@apple.com', 'johnson'),
	new Patients('cory', 'lisenby', 'cory.lisenby@apple.com', 'vieth'),
	new Patients('jeffrey', 'woodby', 'jeffrey.woodby@apple.com', 'smith'),
	new Patients('raymon', 'damron', 'raymon.damron@apple.com', 'johnson'),
	new Patients('manda', 'hornyak', 'manda.hornyak@apple.com', 'johnson'),
	new Patients('ann', 'welton', 'ann.welton@apple.com', 'johnson'),
	new Patients('tam', 'pulley', 'tam.pulley@apple.com', 'smith'),
	new Patients('benito', 'silvia', 'benito.silvia@apple.com', 'vieth'),
  ];
  patientSearch: any;
  searchText: string;
  constructor() {
	  this.patientSearch = this.patients;
  }
  search() {
		if (this.searchText.split(' ')[0] == 'doctor') {
			var texts = this.searchText.split(' ')[1];
			for (var i = this.patientSearch.length - 1; i >= 0; i--) {
				if (this.patientSearch[i].doctorLastName == texts) {
					console.log(this.patientSearch[i].doctorLastName);
				} else {
					this.patientSearch.splice(i, 1);
				}
			}
		} else if (this.searchText.split(' ')[0] == 'name') {
			var texts = this.searchText.split(' ')[1].substr(0, 1);
			for (var i = this.patientSearch.length - 1; i >= 0; i--) {
				if (this.patientSearch[i].firstName.substr(0, 1) == texts) {
					console.log(this.patientSearch[i].doctorLastName);
				} else {
					this.patientSearch.splice(i, 1);
				}
			}			
		} else {
			this.patientSearch = this.patients;
		}	  
  }
}
