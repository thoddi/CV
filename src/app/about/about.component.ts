import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public filter: number

  constructor() {
    this.filter = 0;
  }

  ngOnInit() {
  }

  /*window.onscroll = function(e) {

  }*/

}
