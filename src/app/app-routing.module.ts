import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoardsComponent } from "./boards/boards.component";
import { ClickComponent } from "./click/click.component";

const routes: Routes = [
  {
    path: "",
    component: BoardsComponent
  },
  {
    path: "click",
    component: ClickComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
