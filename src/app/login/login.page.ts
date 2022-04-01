import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable({providedIn: 'root'})
export class LoginPage implements OnInit {

  public formData: FormGroup
  public errorAPI: any

  ngOnInit(){

  }

  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.formData = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  getFormData(){
    this.http.get("http://localhost:8080/api/isLoginPasswordExist?login="+this.formData.value.login+"&password="+this.formData.value.password).subscribe(
      logPas => {
        // console.log(logPas)
        if(logPas != null)
        {
          // console.log(logPas)
          let navigationExtra: NavigationExtras = {queryParams: logPas}

          this.router.navigate(['home'], navigationExtra)
        }else{console.log("Mot de pass ou login incorrecte")}
      }
    )
  }
}
