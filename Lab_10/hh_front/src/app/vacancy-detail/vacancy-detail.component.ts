import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Vacancy} from "../models";

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy = {id:1,name:'1',description:'1',salary:123, company_id:123};
  constructor(private companyService: CompanyService,private route: ActivatedRoute,private location: Location) { }
  vacancyIdFromRoute:number = 0;
  ngOnInit(): void {
    this.getVacancy()
  }
  getVacancy(){
    const routeParams = this.route.snapshot.paramMap;
    this.vacancyIdFromRoute = Number(routeParams.get('id'));
    this.companyService.getVacancy(this.vacancyIdFromRoute).subscribe((data)=>{
      this.vacancy = data;
      console.log(data);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
