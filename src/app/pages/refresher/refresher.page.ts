import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-refresher",
    templateUrl: "./refresher.page.html",
    styleUrls: ["./refresher.page.scss"],
})
export class RefresherPage implements OnInit {
    item: any[] = [];
    constructor() {}

    ngOnInit() {}

    doRefresh(event) {
        setTimeout(() => {
            this.item = Array(20);
            event.target.complete();
        }, 1500);
    }
}
