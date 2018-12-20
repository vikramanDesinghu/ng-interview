import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoardsComponent } from "./boards/boards.component";
import { MatBoardsComponent } from "./mat-boards/mat-boards.component";
import { ClickComponent } from "./click/click.component";

const routes: Routes = [
  {
    path: "",
    component: BoardsComponent
  },
  {
    path: "click",
    component: ClickComponent
  },
  {
    path: "mat-drag",
    component: MatBoardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
