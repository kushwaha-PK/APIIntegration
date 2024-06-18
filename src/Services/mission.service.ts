import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  // Missions:any = [{id:1,Mission:"Task1"},
  //   {id:2,Mission:"Tas2"},
  //   {id:3,Mission:"Task3"}
  // ]
private missionsSubaject =new BehaviorSubject<string[]>([])
private url ="http://localhost:3000/Missions"
//missionObeservable = this.missionsSubaject.asObservable();
  constructor(private missionClient:HttpClient) { }

  addMission(m:string):void{
    // let NewMissions = [...this.missionsSubaject.value,m]
    // this.missionsSubaject.next(NewMissions)
    // console.log(NewMissions)
    
    //this.missions.push(m)
     this.missionClient.put(this.url,m)
  }

  getMissions():Observable<any>
  {
    return this.missionClient.get(this.url)
  }

  deleteMissions(n1:number):Observable<any>{
    // let deleMissions =[...this.missionsSubaject.value]
    // deleMissions.splice(n,1);
    // this.missionsSubaject.next(deleMissions)
    console.log("Service" + this.url+"/"+n1)
    return (this.missionClient.delete(this.url+"/"+n1))
    console.log
  }

}
