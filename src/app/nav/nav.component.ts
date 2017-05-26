import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public tabs: String[];
  currentTab: string;

  constructor() {
    this.currentTab = "about";
    this.tabs = ["Um mig", "Menntun", "Starfsreynsla", "Þekking", "Verkefni"];
  }

  ngOnInit() {
  }

  //navigates to the selected tab.
  onClick(i: string): void{
    console.log("selected: " + i);
    document.getElementById(this.currentTab).className = "";
    document.getElementById(i).className = "selected";
    this.currentTab = i;
  }
}
