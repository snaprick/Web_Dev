import {Component, OnInit} from '@angular/core';
import {Company} from "./models";
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh_front';

  logged = false;

  username ='';
  password = '';
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  constructor(private companyService: CompanyService) {

  }

  login(){
    this.companyService.login(this.username,this.password).subscribe((data)=>{
      console.log(data);
      localStorage.setItem('token',data.token);
      this.logged = true
      this.username = '';
      this.password = '';
    })
  }

  logout(){
    this.logged = false;
    localStorage.removeItem('token');
  }
}
