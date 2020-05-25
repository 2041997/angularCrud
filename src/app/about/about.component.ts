import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from "../sharedservice/sharedservice.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  servicedata:any;
  
  constructor(private SharedserviceService:SharedserviceService) { }
                            
  ngOnInit(): void {
    this.servicedata= this.SharedserviceService;
   console.log(this.servicedata)
  }

}
