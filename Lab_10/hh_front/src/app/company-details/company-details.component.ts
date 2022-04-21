import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company = {id:1,name:'123',description:'123',address:'123'};
  constructor(private companyService: CompanyService,private route: ActivatedRoute,private location: Location) { }
  companyIdFromRoute:number = 0;
  ngOnInit(): void {
    this.getCompany()
  }
  getCompany(){
    const routeParams = this.route.snapshot.paramMap;
    this.companyIdFromRoute = Number(routeParams.get('id'));
    this.companyService.getCompanyDetail(this.companyIdFromRoute).subscribe((data)=>{
      this.company = data;
      console.log(data);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
