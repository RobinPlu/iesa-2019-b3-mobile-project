import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { BetPage } from "./bet.page";
import { Calendar } from '@ionic-native/calendar';

const routes: Routes = [
  {
    path: "",
    component: BetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],


  declarations: [BetPage]
})
export class BetPageModule {}
