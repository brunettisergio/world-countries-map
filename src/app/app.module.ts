import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./components/map/map.component";
import { CountryComponent } from "./components/country/country.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [{ path: "", component: MapComponent }];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CountryComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
