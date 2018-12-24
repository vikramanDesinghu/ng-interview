import { Component, OnInit } from "@angular/core";
import { BoardService } from "../board.service";
import { ConfirmationPrompts } from "./confirmation-prompts/confirmation-prompts.component";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-boards",
  templateUrl: "./boards.component.html",
  styleUrls: ["./boards.component.css"]
})
export class BoardsComponent implements OnInit {
  totalCards: number;
  storyBoard = [
    {
      listName: "to-do",
      hasSaved: true,
      cardList: [
        { description: "Check e-mail", hasSaved: true },
        { description: "Walk dog", hasSaved: true }
      ]
    },

    {
      listName: "currently working",
      hasSaved: true,
      cardList: [
        { description: "Brush teeth", hasSaved: true },
        { description: "Take a shower", hasSaved: true }
      ]
    },

    {
      listName: "completed",
      hasSaved: true,
      cardList: [{ description: "Get up", hasSaved: true }]
    }
  ];

  constructor(private boardService: BoardService, public dialog: MatDialog) {}

  openPrompt(arry, index) {
    const dialogRef = this.dialog.open(ConfirmationPrompts);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removeItem(arry, index);
      }
    });
  }

  ngOnInit() {
    let localData = this.boardService.getData();
    if (!localData) {
      // this.storyBoard = [];
    } else {
      this.storyBoard = JSON.parse(localData);
    }
    this.totalCards = this.storyBoard.reduce(this.reducer, 0);
  }
  reducer = (currentValue, accumulator) =>
    accumulator.cardList.length + currentValue;

  onNoClick() {}
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

  addList() {
    this.storyBoard.push({
      listName: "",
      hasSaved: false,
      cardList: []
    });
  }
  addCard(list: any) {
    list.push({ description: "", hasSaved: false });
    this.totalCards = this.storyBoard.reduce(this.reducer, 0);
  }
  removeItem(items: any, index: number) {
    items.splice(index, 1);
    this.boardService.saveData(this.storyBoard);
    this.totalCards = this.storyBoard.reduce(this.reducer, 0);
  }
  toEdit(item) {
    item.hasSaved = false;
  }
  saveList(list: any, data: string) {
    list.listName = data;
    list.hasSaved = true;
    this.boardService.saveData(this.storyBoard);
  }
  saveCard(itemData, index, data: any) {
    itemData.cardList[index] = { description: data, hasSaved: true };
    this.boardService.saveData(this.storyBoard);
  }
  removeAll(board) {
    board.cardList = [];
    this.boardService.saveData(this.storyBoard);
    this.totalCards = this.storyBoard.reduce(this.reducer, 0);
  }
}

@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "dialog-content-example-dialog.html"
})
export class DialogContentExampleDialog {}
