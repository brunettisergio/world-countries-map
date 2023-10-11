import { Component } from "@angular/core";
import { CountryService } from "../../services/country.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent {
  data: [] = [];
  constructor(private countryService: CountryService) {}

  getCountry(event?: Event, countryName?: string) {
    let countrySelected: string = "";

    if (!countryName) {
      countrySelected = (event!.target as Element).id;
    } else {
      let countries = Array.prototype.slice.call(
        document.getElementsByTagName("path")
      );

      for (let country of countries) {
        if (
          country.attributes.name.value.toLowerCase() ==
          countryName.toLowerCase()
        ) {
          countrySelected = country.attributes.id.value;
        }
      }
    }

    this.countryService
      .getCountry(countrySelected)
      .subscribe(response => (this.data = response));
  }
}
