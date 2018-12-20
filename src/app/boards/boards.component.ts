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
      boardName: "toDo",
      list: ["Get to work", "Pick up groceries", "Go home", "Fall asleep"]
    },

    {
      boardName: "currentlyWorking",
      list: [
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
        "Walk dog"
      ]
    },

    {
      boardName: "completed",
      list: [
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

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    setTimeout(() => {
      this.boardService.saveData(this.storyBoard);
    }, 250);
  }
}
