import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.page.html',
  styleUrls: ['./list-apprenant.page.scss'],
})
export class ListApprenantPage implements OnInit {
  public listApprenants: any

  constructor(private http: HttpClient)
  {
    this.http.get("http://localhost:8080/api/listApprenants").subscribe(
      data => {
        this.listApprenants = data
        console.log(data)
      }
    )
  }

  ngOnInit() {
  }

}
