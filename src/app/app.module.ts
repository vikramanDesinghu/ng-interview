import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BoardsComponent } from "./boards/boards.component";
import { ClickComponent } from "./click/click.component";
import { MatBoardsComponent } from "./mat-boards/mat-boards.component";
import { SingleFormComponent } from "./single-form/single-form.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    ClickComponent,
    MatBoardsComponent,
    SingleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
