import { Component } from '@angular/core';
import { TabNameService } from './../tab-name.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    constructor(private tabName: TabNameService) {
    }
}
