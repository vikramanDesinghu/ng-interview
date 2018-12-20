import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-click",
  templateUrl: "./click.component.html",
  styleUrls: ["./click.component.css"]
})
export class ClickComponent implements OnInit {
  constructor() {}
  firstClick: number = 0;
  secondClick: number = 0;

  ngOnInit() {}

  onClick(click: number): void {
    console.log("click", click);
    if (this.firstClick === click) {
      this.firstClick = 0;
      return;
    }
    if (this.secondClick === click) {
      this.secondClick = 0;
      return;
    }
    if (this.firstClick === 0 && this.secondClick === 0) {
      this.firstClick = click;
    } else if (this.firstClick !== 0 && this.secondClick === 0) {
      this.secondClick = click;
    } else {
      this.firstClick = this.secondClick;
      this.secondClick = click;
    }
  }
  arraySpan(n: number): number[] {
    return Array(n);
  }
}
