import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  hoverWrapper: HTMLElement;
  hoverArrow: HTMLElement;
  clickedWrapper: HTMLElement;
  clickedArrow: HTMLElement;
  constructor() {
      this.hoverWrapper = undefined;
      this.hoverArrow = undefined;
      this.clickedWrapper = undefined;
      this.clickedArrow = undefined;
  }

  ngOnInit() {
  }

  private expandWrapper(wrapper: HTMLElement): void {
    let textBox = <HTMLElement>wrapper.children[0];
    wrapper.style.height = textBox.clientHeight + "px";
  }

  private collapseWrapper(wrapper: HTMLElement): void {
    wrapper.style.height = "0px";
  }

  onBlockHover(e: HTMLElement): void {
    this.hoverWrapper = <HTMLElement>e.children[2];
    // can't hover over a clicked
    if(this.hoverWrapper == this.clickedWrapper) {
      this.hoverWrapper = undefined;
      return;
    }
    this.expandWrapper(this.hoverWrapper);
    e.classList.add("selected");
    this.hoverArrow = <HTMLElement>e.children[3];
    this.hoverArrow.classList.add("hover");
  }

  onBlockLeave(e: HTMLElement): void {
    if(this.hoverWrapper != undefined) {
      this.collapseWrapper(this.hoverWrapper);
      this.hoverWrapper = undefined;
      e.classList.remove("selected");
      this.hoverArrow.classList.remove("hover");
    }
  }

  onBlockClick(e: HTMLElement): void {
    let wrapper = <HTMLElement>e.children[2];
    if(wrapper == this.hoverWrapper) return; //can't click while hovering

    // if clickedWrapper is not undefined, it has to be closed.
    if(this.clickedWrapper != undefined) {
      this.collapseWrapper(this.clickedWrapper);
      this.clickedArrow.classList.remove("up");
      this.clickedWrapper.parentElement.classList.remove("selected");
    }
    // if the new wrapper is the same as the old, the function is over.
    if(wrapper == this.clickedWrapper) {
      this.clickedWrapper = undefined;
      return;
    }
    // the selected wrapper is opened.
    this.clickedArrow = <HTMLElement>e.children[3];
    this.clickedWrapper = wrapper;
    this.expandWrapper(wrapper);
    this.clickedArrow.classList.add("up");
    e.classList.add("selected");
  }
}
