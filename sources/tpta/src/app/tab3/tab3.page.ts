import { Component } from '@angular/core';
import { TabNameService } from './../tab-name.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    constructor(private tabName: TabNameService) {
    }
}
