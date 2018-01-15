import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  wrapper: HTMLElement;
  //buttonArrow: HTMLElement;
  Element: HTMLElement;
  constructor() {
      this.wrapper = undefined;
      //this.buttonArrow = undefined;
      this.Element = undefined;
  }

  ngOnInit() {
  }

  expandDescription(e: HTMLElement): void {
    this.Element = e;
    this.wrapper = <HTMLElement>e.children[2];
    //this.buttonArrow = <HTMLElement>e.children[3];
    let textBox = <HTMLElement>this.wrapper.children[0];

    this.wrapper.style.height = textBox.clientHeight + "px";
  }

  collapseDescription(e: HTMLElement): void {
    this.wrapper.style.height = "0px";
    this.wrapper = this.Element = undefined;
  }

  onBlockClick(e: HTMLElement): void {
    if(this.Element != e) {
      console.log("What's going on here?");
      this.colOrExp(e);
    }
  }

  colOrExp(e: HTMLElement): void {
    let arrowBtn = <HTMLElement>e.children[3];
    let classIndex: number = arrowBtn.classList.length;
    if(arrowBtn.classList[classIndex - 1] == "up") {
      arrowBtn.classList.remove("up");
      this.collapseDescription(e);
    }
    else {
      arrowBtn.classList.add("up");
      this.expandDescription(e);
    }
  }
}
