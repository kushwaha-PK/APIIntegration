import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../Services/mission.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component implements OnInit{
  missions:any = {id:'',Mission:''}
constructor(private mission:MissionService)
{

}
  ngOnInit(): void {
    this.mission.getMissions().subscribe((data)=>{
      this.missions=data;
    });
    
  }
  deleteMission(n1:number){
    console.log("delete mission called"+n1)
    this.mission.deleteMissions(n1).subscribe(()=>{
      this.mission.getMissions().subscribe((data)=>{
        this.missions=data;
      });
    })
  }
  
    //this.mission.deleteMission(n1)
}
