import { Component, OnInit, ViewChild } from "@angular/core";
import { IonList } from "@ionic/angular";
import { Observable } from "rxjs";
import { DataService } from "../../service/data.service";

@Component({
    selector: "app-list",
    templateUrl: "./list.page.html",
    styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
    usuarios: Observable<any>;
    @ViewChild(IonList) ionList: IonList;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.usuarios = this.dataService.getUsuarios();
    }

    favorite(user: any) {
        console.log("🚀 ~ file: list.page.ts ~ line 20 ~ ListPage ~ favorite ~ user", user);
        this.ionList.closeSlidingItems();
    }

    share(user: any) {
        console.log("🚀 ~ file: list.page.ts ~ line 25 ~ ListPage ~ favorite ~ user", user);
        this.ionList.closeSlidingItems();
    }

    eliminar(user: any) {
        console.log("🚀 ~ file: list.page.ts ~ line 28 ~ ListPage ~ favorite ~ user", user);
        this.ionList.closeSlidingItems();
    }
}
