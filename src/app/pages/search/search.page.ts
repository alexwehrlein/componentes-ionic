import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.page.html",
    styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
    albunes: any[] = [];
    text: string = "";
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getAlbum().subscribe((res) => {
            this.albunes = res;
        });
    }

    search(event) {
        this.text = event.detail.value;
    }
}
