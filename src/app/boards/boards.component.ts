import { Component, OnInit } from "@angular/core";
import { BoardService } from "../board.service";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-boards",
  templateUrl: "./boards.component.html",
  styleUrls: ["./boards.component.css"]
})
export class BoardsComponent implements OnInit {
  storyBoard = [
    {
      listName: "toDo",
      cardList: ["Get to work", "Pick up groceries", "Go home", "Fall asleep"]
    },

    {
      listName: "currentlyWorking",
      cardList: [
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
        "Walk dog"
      ]
    },

    {
      listName: "completed",
      cardList: [
        "Get up completed",
        "Brush teeth completed",
        "Take a shower completed",
        "Check e-mail completed",
        "Walk dog completed"
      ]
    }
  ];

  constructor(private boardService: BoardService) {}
  ngOnInit() {
    let localData = this.boardService.getData();
    if (!localData) {
      // this.storyBoard = [];
    } else {
      this.storyBoard = JSON.parse(localData);
    }
  }
  saveInLocal() {
    console.log("this.storyBoard", this.storyBoard);
    setTimeout(() => {
      this.boardService.saveData(this.storyBoard);
    }, 250);
  }
}
