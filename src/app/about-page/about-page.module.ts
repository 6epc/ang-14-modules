import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { AboutExtraPageComponent } from "./about-extra-page/about-extra-page.component";
import { AboutPageComponent } from "./about-page.component";
import { AboutpageRoutingModule } from "./about-page-routing.module";

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [CommonModule, SharedModule, AboutpageRoutingModule],
  exports: [],
  providers: []
})
export class AboutPageModule {}
