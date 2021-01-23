import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SegmenPageRoutingModule } from "./segmen-routing.module";

import { SegmenPage } from "./segmen.page";
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SegmenPageRoutingModule,
        ComponentsModule,
        PipesModule,
    ],
    declarations: [SegmenPage],
})
export class SegmenPageModule {}
