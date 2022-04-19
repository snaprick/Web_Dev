import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  vacancies: Vacancy[] = [];
  constructor(private vacancyService: CompanyService, private route: ActivatedRoute) { }
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
}
