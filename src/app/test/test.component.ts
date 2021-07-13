import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Test} from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 quizzes: Test[] = [];
 i=0;
 answerSelected = false;
 correctAns = 0;
 incorrectAns = 0;
 result = false;
 random:number;
 filterName : string;
  constructor(private testService:TestService) { }

  ngOnInit(): void {
    this.quizzes=this.testService.getQuizzes();
    this.random = Math.floor(Math.random() * this.quizzes.length);
  }
  next(){
    
    this.i++;
    this.filterName='';
    
    
     
     
  }
  

}
