import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];
  isEdit:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'silver'
    };
    this.options = ['ABS','Autopilot','Autoparking'];
  };

  showEdit() {
    this.isEdit = ! this.isEdit;
  }

  addOpt(option){
    this.options.unshift(option);
    return  false;
  };

  deleteOpt(option){
    for(let i=0;i<this.options.length; i++){
      if(this.options[i] == option)
      this.options.splice(i, 1);
      break;
}
  }

  carSelect(carName) {
    if (carName == 'BMW') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
      car: 'Dark-blue',
      salon: 'White',
      wheels: 'silver'
    };
    this.options = ['ABS','Autopilot','Autoparking'];
    } else if (carName == 'Audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'silver'
    };
    this.options = ['ABS','Autopilot','Autoparking'];
    } else {
      this.name = 'Mercedes';
      this.speed = 260;
      this.model = 'S600';
      this.colors = {
      car: 'Black',
      salon: 'Brown',
      wheels: 'silver'
    };
    this.options = ['ABS','Autopilot','Autoparking'];
  };
  };
}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}