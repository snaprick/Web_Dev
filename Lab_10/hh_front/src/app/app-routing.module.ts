import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {CompaniesComponent} from "./companies/companies.component";
import {CompanyDetailsComponent} from "./company-details/company-details.component";

const routes: Routes = [
  {path:'companies',component: CompaniesComponent},
  {path:'companies/:id',component: CompanyDetailsComponent},
  {path:'vacancies',component: VacanciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
