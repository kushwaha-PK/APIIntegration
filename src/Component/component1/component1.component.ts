import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MissionService } from '../../Services/mission.service';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component{
  missions:any={ID:'',Missions:''}
  mission:string="";
  ID:number=0;
constructor(private missionService:MissionService)
{

}
  AddMission(mission:string)
  {
    console.log(mission)
    this.missionService.addMission(this.mission);
  }
}
