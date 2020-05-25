import { Component, OnInit } from '@angular/core';
import { home } from "../model/home.model";
import { SharedserviceService } from "../sharedservice/sharedservice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[SharedserviceService],

})
export class HomeComponent implements OnInit {
home=new home();
servicedata :any;
title= "Submit";
Array=[];
activeIndex= -1;
  data: any;
  
  constructor(private SharedserviceService:SharedserviceService) { }

  ngOnInit() {
    // this.getdata();
    
    this.servicedata= this.SharedserviceService;
    console.log(this.servicedata)
  }
  // getdata(){
  //   this.SharedserviceService.getdata().subscribe(data=>{
  //     this.data=data;
  //     console.log(this.data);
  //   })
  // }
  onSubmit(){
    // console.log("hello")
    if(this.activeIndex){
  this.Array.unshift(this.home);
  this.home=new home();
    
}
else{
  this.Array.splice(this.activeIndex,1,this.home);
  this.home= new home();
  this.title="Submit"
}
  }
  Delete(j){
    this.Array.splice(j);
  }
  Edit(obj,index){
   this.title='Update';
    this.home=obj;
    this.activeIndex=index;
  }

}
