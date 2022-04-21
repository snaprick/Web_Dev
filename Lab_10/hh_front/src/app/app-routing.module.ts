import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {CompaniesComponent} from "./companies/companies.component";
import {CompanyDetailsComponent} from "./company-details/company-details.component";
import {TopTenComponent} from "./top-ten/top-ten.component";
import {CompanyVacanciesComponent} from "./company-vacancies/company-vacancies.component";
import {VacancyDetailComponent} from "./vacancy-detail/vacancy-detail.component";

const routes: Routes = [
  {path:'companies',component: CompaniesComponent},
  {path:'companies/:id',component: CompanyDetailsComponent},//222
  {path:'companies/:id/vacancies',component: CompanyVacanciesComponent},
  {path:'vacancies',component: VacanciesComponent},
  {path:'vacancies/top_ten',component: TopTenComponent},
  {path:'vacancies/:id',component: VacancyDetailComponent},//222

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
