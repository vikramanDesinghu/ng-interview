import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BoardsComponent } from "./boards/boards.component";
import { ClickComponent } from "./click/click.component";
import { ListComponent } from './boards/list/list.component';
import { MatBoardsComponent } from './mat-boards/mat-boards.component';

@NgModule({
  declarations: [AppComponent, BoardsComponent, ClickComponent, ListComponent, MatBoardsComponent],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
