import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(){}
  flag=false;
  value = '';
  ngOnInit() {
  }

}
