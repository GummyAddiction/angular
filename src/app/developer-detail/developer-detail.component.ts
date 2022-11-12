import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer-model/developer';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DeveloperService } from '../developer-service/developer.service';


@Component({
  selector: 'app-developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {

  developer: Developer | undefined;


  constructor(

    private route: ActivatedRoute,
    private developerService: DeveloperService,
    private location: Location,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getDeveloper();
  }


  getDeveloper(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.developerService.getDeveloper(id)
    .subscribe(data => 
      {this.developer = data
        console.log(data);
        console.log(data.name)
      });
  }


  deleteDeveloper():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.developerService.deleteDeveloper(id);
    console.log('delete fnc')
    this.router.navigateByUrl('');
  }


}
