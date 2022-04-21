import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  constructor(private vacancyService: CompanyService, private route: ActivatedRoute , private location: Location) { }
  companyIdFromRoute:number = 0;
  ngOnInit(): void {
    this.getVacancies();
    console.log(this.companyIdFromRoute)
  }
  getVacancies(){
    const routeParams = this.route.snapshot.paramMap;
    this.companyIdFromRoute = Number(routeParams.get('id'));
    this.vacancyService.getCompanyVacancies(this.companyIdFromRoute).subscribe((data)=>{
      this.vacancies = data;
      console.log(data);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
