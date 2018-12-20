import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

import { BoardService } from "../../board.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() list: string[];
  @Output() saveDarag = new EventEmitter();
  constructor(private boardService:BoardService) {}

  ngOnInit() {}
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
      // this.boardService.saveData(this.storyBoard);
      this.saveDarag.emit();
    }, 250);
  }
}
