import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public apprenant: any
  public currentTime: any

  constructor(private activedRoute: ActivatedRoute){
    this.activedRoute.queryParams.subscribe(apprenant => {this.apprenant = apprenant})

    let date = new Date()
    this.currentTime = "heure de connexion : "+date.getHours()+"h: "+date.getMinutes()+"min "+date.getSeconds()+"s" 
  }

}
