export interface Company {
  id:number;
  name:string;
  description:string;
  address:string;
}

export interface Vacancy {
  id:number;
  name:string;
  description:string;
  salary:number;
  company_id:number;
}

export interface AuthToken {
  token:string;
}
