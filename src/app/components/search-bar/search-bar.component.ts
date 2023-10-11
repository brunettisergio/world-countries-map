import { Component } from "@angular/core";
import { MapComponent } from "../map/map.component";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent {
  term: string = "";

  constructor(private map: MapComponent) {}

  onFormSubmit(event: any) {
    event.preventDefault();
    this.map.getCountry(event, this.term);
  }
}
