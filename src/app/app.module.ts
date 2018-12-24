import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  BoardsComponent,
  DialogContentExampleDialog
} from "./boards/boards.component";
import { ConfirmationPrompts } from "./boards/confirmation-prompts/confirmation-prompts.component";

import { ClickComponent } from "./click/click.component";
import { MatBoardsComponent } from "./mat-boards/mat-boards.component";
import { SingleFormComponent } from "./single-form/single-form.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    ClickComponent,
    MatBoardsComponent,
    SingleFormComponent,
    ConfirmationPrompts,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentExampleDialog, ConfirmationPrompts]
})
export class AppModule {}
