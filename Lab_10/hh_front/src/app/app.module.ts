import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { CompaniesComponent } from './companies/companies.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./AuthInterceptor";
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VacanciesComponent,
    CompaniesComponent,
    CompanyDetailsComponent,
    TopTenComponent,
    CompanyVacanciesComponent,
    VacancyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
