import { Component, OnInit } from '@angular/core';
import { DeveloperModel } from '../developer-model/developer';
import { DeveloperService } from '../developer-service/developer.service';
import { Developer } from '../developer-model/developer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developers: Developer[] = [];

  

  constructor(private developerService : DeveloperService,
    private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getDevelopers();
  }



  getDevelopers(): void {
    this.developerService.getDevelopers().subscribe( data => {this.developers = data; console.log(data)})
  }


  deleteDeveloper(id?: number):void{
    this.developerService.deleteDeveloper(id);
    console.log('delete fnc')
    this.getDevelopers();
  }

  getDeveloperByName(term: string) :void {
    this.developerService.searchDeveloper(term).subscribe( data => {this.developers = data; console.log(data)})
  }


}
