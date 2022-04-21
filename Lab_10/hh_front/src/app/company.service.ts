import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthToken, Company, Vacancy} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  login(username:string,password:string): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`,{
      username,
      password
    });
  }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies`);
  }
  getCompanyDetail(company_id:number): Observable<Company>{
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${company_id}`)
  }
  getVacancies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`);
  }
  getCompanyVacancies(company_id:number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${company_id}/vacancies`);
  }
  getTopTen(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten`);
  }
  getVacancy(vacancy_id:number): Observable<Vacancy>{
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${vacancy_id}`);
  }
}
