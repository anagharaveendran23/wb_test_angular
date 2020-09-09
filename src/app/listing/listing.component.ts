import { Component } from '@angular/core';

import { TestService } from '../test.service';

import { HttpClient } from '@angular/common/http';


interface myData {
  obj: any;}


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent {
  title: string = "List Users";
  records: any;
  randomNumber = 0;

 
constructor(private svc: TestService, private http: HttpClient)
{
  
svc.printToConsole("Message from App Component");
  
this.randomNumber = svc.getRandom();
 
}

  
ngOnInit(){

    
let obs =  this.http.get<myData>('https://reqres.in/api/users?page=2');
    
obs.subscribe( (response) => this.records= response  ); 
    
     
console.log(this.records);
  
}

}
