import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BoardService {
  constructor() {}
  saveData(data): void {
    localStorage.setItem("board", JSON.stringify(data));
  }
  getData() {
    return localStorage.getItem("board");
  }
}
