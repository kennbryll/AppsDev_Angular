import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator-Angular';
  num1=0;
  num2=0;
  answer=0;
  change1=false;
  
getFirst(value : any){
  const val= parseInt(value);
  this.num1=val;
  console.log(val);
  this.change1=false;
}
getSecond(value: any){
  const val= parseInt(value);
  this.num2=val;
  console.log(val);
  this.change1=false;
}

Add(){
this.answer=this.num1 + this.num2;

}
Subtract(){
  this.answer=this.num1-this.num2;
  
}
Multiply(){
  this.answer=this.num1*this.num2;
  
}
Divide(){
    this.answer=this.num1/this.num2;
    
  }
  
}