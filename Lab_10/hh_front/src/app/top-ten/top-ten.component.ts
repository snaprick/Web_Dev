import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  vacancies: Vacancy[] = [];
  constructor(private vacancyService: CompanyService,private location: Location) { }

  ngOnInit(): void {
    this.getVacancies()
  }
  getVacancies(){
    this.vacancyService.getTopTen().subscribe((data)=>{
      this.vacancies = data;
      console.log(data);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
