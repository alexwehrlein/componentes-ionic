import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";
import { Observable } from "rxjs";

@Component({
    selector: "app-segmen",
    templateUrl: "./segmen.page.html",
    styleUrls: ["./segmen.page.scss"],
})
export class SegmenPage implements OnInit {
    superHeroes: Observable<any>;
    publisher: string = "";
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.superHeroes = this.dataService.getHeroes();
    }

    segmentChanged(ev) {
        console.log("🚀 ~ file: segmen.page.ts ~ line 14 ~ SegmenPage ~ ev", ev.detail);
        this.publisher = ev.detail.value;
    }
}
