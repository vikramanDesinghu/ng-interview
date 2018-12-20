import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: "app-single-form",
  templateUrl: "./single-form.component.html",
  styleUrls: ["./single-form.component.css"]
})
export class SingleFormComponent implements OnInit {
  singleForm: FormGroup;
  @Output() saveForm = new EventEmitter();
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.singleForm = this.fb.group({
      description: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.singleForm.invalid) {
      return;
    }
    this.saveForm.emit(this.singleForm.value["description"]);
    console.log("this.singleForm", this.singleForm.value["description"]);
  }
}
