import { Component, OnInit } from '@angular/core';
import { Developer, DeveloperModel, AddDeveloper } from '../developer-model/developer';
import { DeveloperService } from '../developer-service/developer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.css']
})
export class DeveloperFormComponent implements OnInit {

  developerModel = new DeveloperModel(0,'Name','Telp','Skill','Note')
  submitted = false;

  

  constructor(
    private route: ActivatedRoute,
    private developerService: DeveloperService,
    private location: Location,
    private router: Router) { }
   

  ngOnInit(): void {
    if(Number(this.route.snapshot.paramMap.get('id')) != 0 ){

      this.getDeveloper();

    }
  }

  onSubmit(){
    this.submitted = true;
    if(Number(this.route.snapshot.paramMap.get('id')) != 0){
      this.updateDeveloper();
      this.router.navigateByUrl(`detail/${this.developerModel.id}`)
    }
    else{
      this.addDeveloper()
      this.router.navigateByUrl('')

    }
  }

  newDeveloper(){
    this.developerModel = new DeveloperModel(0,'Name','Telp','Skill','Note')
  }


  getDeveloper(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.developerService.getDeveloper(id)
    .subscribe(data => 
      {this.developerModel = data
        console.log(data);
        console.log(data.name)
      });
  }

  updateDeveloper(): void{
    this.developerService.updateDeveloper(this.developerModel);
  }

  addDeveloper(): void{


    const addDeveloperModel:AddDeveloper = this.developerModel
    this.developerService.addDeveloper(addDeveloperModel);
  }

}
