import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppMenuComponent } from "./app-menu/app-menu.component";
import { FormsComponent } from "./forms/forms.component";

const routes : Routes = [
{path: '',component: AppMenuComponent},

];
@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule
{

}