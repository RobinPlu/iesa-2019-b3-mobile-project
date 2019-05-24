import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./login/login.module#LoginPageModule" },
  { path: "home", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "bet", loadChildren: "./bet/bet.module#BetPageModule" },
  {
    path: "betexample",
    loadChildren: "./betexample/betexample.module#BetexamplePageModule"
  },
  {
    path: "betfake",
    loadChildren: "./betfake/betfake.module#BetfakePageModule"
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
