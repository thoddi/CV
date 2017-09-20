import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public tabs: String[];
  currentTab: string;
  menuIsActive: boolean;

  constructor() {
    this.menuIsActive = false;
    this.currentTab = "home";
  }

  ngOnInit() {
  }

  onExpand(): void{
    if(this.menuIsActive){
      this.menuIsActive = false;
    }
    else {
      this.menuIsActive = true;
    }

  }

  //navigates to the selected tab.
  onClick(i: string): void{
    console.log("selected: " + i);
    //document.getElementById(this.currentTab).className = "";
    //document.getElementById(i).className = "selected";
    this.currentTab = i;
    this.menuIsActive = false;
  }

  isCurrentTab(tab :string): boolean {
    return this.currentTab === tab;
  }
}
