import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutConfig } from 'src/app/models/layout.config';
import { AgentLocationService } from 'src/app/services/agent-location/agent-location.service';
import { LayoutConfigService } from 'src/app/services/layout-service/layout.service';
import{modeSignalStatus}from '../../models/itinerary.model'


//Calling share location from the travel agent
//import{} from '../../shared/ta-task-card/ta-task-card.component'

//calling share location related service
//import{TaskAssignmentService} from '../../services/task-assignment/task-assignment.service'

//still rating don't have a service. have to create


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  public uniqueKey: string;
  modeSignal:string=modeSignalStatus.singleLiveMode;
  TAAgent:string;

  currentRate = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _agentLocationService: AgentLocationService,
    private configService: LayoutConfigService
  ) {
    this.configService.setConfig(new LayoutConfig(false,false));
   }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {
      this.uniqueKey = parameter.randomKey
      //alert("Key :"+this.uniqueKey)
      this.getAgentDetails(this.uniqueKey)
    })
  }

  getAgentDetails(key){
    this._agentLocationService.getAgentLocation(key).subscribe(res=>{
      if(res){
        //alert("response"+JSON.stringify(res))
        //console.log(res);
        this.TAAgent=res.agent_id;
      }
    },err=>{
      alert("error in getting agent details"+JSON.stringify(err))
    })
  }

  

}


