import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  wrapper: HTMLElement;
  textBox: HTMLElement;
  constructor() {
      this.wrapper = undefined;
      this.textBox = undefined;
  }

  ngOnInit() {
  }

  expandDescription(e: HTMLElement): void {
    this.wrapper = <HTMLElement>e.children[2];
    this.textBox = <HTMLElement>this.wrapper.children[0];

    this.wrapper.style.height = this.textBox.clientHeight + "px";
  }

  collapseDescription(e: HTMLElement): void {
    this.wrapper.style.height = "0px";

    this.wrapper = undefined;
    this.textBox = undefined;
  }

}
