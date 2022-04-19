import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  vacancies: Vacancy[] = [];
  constructor(private vacancyService: CompanyService) { }

  ngOnInit(): void {
    this.getVacancies()
  }
  getVacancies(){
    this.vacancyService.getVacancies().subscribe((data)=>{
      this.vacancies = data;
      console.log(data);
    });
  }
}
