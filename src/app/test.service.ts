import { Injectable } from '@angular/core';
import {Test} from './test.model';
@Injectable({
  providedIn: 'root'
})
export class TestService {
quizzes: Test[] = [

  {
    question: "1. Tell me about yourself.",
    
  },
  {
  question: "2. Why do you want to work for this company?",
  
},
{
  question: "3. What interests you about this particular job?",
 
},
{
  question: "4. How did you hear about the position?",
  
},
{
  question: "5. What do you know about our organization?",
  
},
{
  question: "6. How has your career so far prepared you for this position? ",
 
},
{
  question: "7. Why do you want to change roles",
  
},
{
  question: "8. What is your greatest professional achievement?",
 
},
{
  question: "9. Tell me about your worst boss",
  
},
{
  question: "10. Describe a conflict that you faced at work – and how you dealt with it.",
  
},



]
  constructor() {}
    getQuizzes(){
      return this.quizzes;
    }
   
}
