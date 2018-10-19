import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chads2vasc',
  templateUrl: './chads2vasc.component.html',
  styleUrls: ['./chads2vasc.component.css']
})
export class Chads2vascComponent implements OnInit { 
  congestive: boolean = false;
  hypertension: boolean = false;
  age75_Over: boolean = false;
  age65_74: boolean = false;
  diabetes: boolean = false;
  stroke: boolean = false;
  vascular: boolean = false;
  woman: boolean = false;

  chads: number = 0;
  ak1: string = "Lav risiko";
  ak2: string = "Evnt Albyl-E";

  riskColor: string = "#7b7";
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.chads = 0;
    
    if(this.congestive){
      this.chads++;
    }
    if(this.hypertension){
      this.chads++;
    }
    if(this.age75_Over){
      this.chads+=2;
    }
    if(this.age65_74){
      this.chads++;
    }
    if(this.diabetes){
      this.chads++;
    }
    if(this.stroke){
      this.chads+=2;
    }
    if(this.vascular){
      this.chads++;
    }
    if(this.woman){
      this.chads++;
    }
		
		//AK
		if (this.chads === 0) {
      this.ak1 = "Lav risiko for hjerneslag.";
      this.ak2 = "";
      this.riskColor = "#7b7";
		}
		else if (this.chads === 1) {
      this.ak1 = "Moderat risiko for hjerneslag.";
      this.ak2 = "Blodfortynnende bør vurderes.";
      this.riskColor = "#ffa500";
		}
		else if (this.chads >= 2) {
      this.ak1 = "Høy risiko for hjerneslag.";
      this.ak2 = "Blodfortynnende anbefales.";
      this.riskColor = "#ff4500";
		}
  }
}
