import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
    name:string[] = [];
    desc:string[] = [];
    price:string[] = [];
    constructor(private ds: DataService) { }
    ngOnInit() {
      this.ds.getData().subscribe(res => {

        console.log(res);
        for(let g=0;g<res.length;g++) {
          this.name[g] = res[g]["Name"];
          this.desc[g] = res[g]["Description"];
          this.price[g] = res[g]["Price"];
        }
      });
    }
}
