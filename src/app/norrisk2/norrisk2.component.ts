import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-norrisk2',
  templateUrl: './norrisk2.component.html',
  styleUrls: ['./norrisk2.component.css']
})
export class Norrisk2Component implements OnInit {

  norrisk2Form: FormGroup;
  riskColor: string = "#7b7";
  riskPercentage: string = "1 %";
  riskLevel: string = "Lav risiko";

  constructor(private fb: FormBuilder) { }

  ngOnInit():void {
    this.norrisk2Form = this.fb.group({
      gender: 'woman',
      smoker: 'non-smoker',
      age: 45,
      bloodPresure: 120,
      cholesterol: 4.0,
      familyCHD: '0',
      BPmed: '0',
      HDL: '0'
    });
  }

  calculateValue(value: string):void {
    var gender = this.norrisk2Form.get('gender').value === 'woman'? 1 : 2;
    var SMK = this.norrisk2Form.get('smoker').value === 'smoker' ? 1 : 0;
    var age = this.norrisk2Form.get('age').value;
    var S = (this.norrisk2Form.get('bloodPresure').value - 120) / 10;
    var C = this.norrisk2Form.get('cholesterol').value - 4;
		var BPmed = this.norrisk2Form.get('BPmed').value === '1' ? 1 : 0;
		var lowHDL = this.norrisk2Form.get('HDL').value === '1' ? 1 : 0;
		var A = age - 40;		
		var familyCHD_1 = this.norrisk2Form.get('familyCHD').value === '1' || this.norrisk2Form.get('familyCHD').value == '2+' ? 1 : 0;
    var familyCHD_2 = this.norrisk2Form.get('familyCHD').value === '2+' ? 1 : 0;
    
    //Calculation
    var w;
    //if gender is Male
    if(gender === 2){
      w = 0.11447* A -0.00043*Math.pow(A,2) + 0.22283* S + 0.35625* C + 0.91727* SMK-0.00896*C*A -0.00430*S*A-0.02051*SMK*A+0.27824*BPmed+0.33162* lowHDL+0.29986* familyCHD_1 + 0.59692* familyCHD_2;
    }else{
      w = 0.13037* A - 0.00066 *Math.pow(A,2) + 0.25241 * S + 0.07235* C + 1.26781* SMK -0.00500*S*A -0.02456*SMK*A+0.19200*BPmed+0.32377* lowHDL+0.25361* familyCHD_1 +0.54909* familyCHD_2;
    }

    var hr = Math.exp(w);
    var risk;
    if(gender === 2){
      risk = 1-Math.exp(-hr * 0.00526);
    }else{
      risk = 1-Math.exp(-hr* 0.00232);
    }

    var risiko;
    if(Math.floor(risk*100) > 0){
      risiko = Math.floor(risk*100);
    }else{
      risiko = 1;
    }

    this.riskPercentage = risiko + ' %';

    if((risiko < 4 && age < 55) || (risiko < 8 && age < 65)) {
      this.riskLevel = 'Lav risiko';
      this.riskColor = "#7b7"
    }else if(risiko < 12) {
      this.riskLevel = 'Lav';
      this.riskColor = "#87cefa";
    }else if((risiko < 5 && age < 55) || (risiko < 10 && age < 65) || (risiko < 15)) {
      this.riskLevel = 'Middels risiko';
      this.riskColor = "#ffa500";
    }else{
      this.riskLevel = 'Høy risiko';
      this.riskColor = "#ff4500";
    }
  }

}
