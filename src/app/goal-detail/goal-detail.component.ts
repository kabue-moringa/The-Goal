import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
@Input() goal!: Goal;
@Output() isComplete = new EventEmitter<boolean>();
// tslint:disable-next-line:typedef
goalDelete(complete: boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
