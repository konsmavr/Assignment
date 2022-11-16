import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Output() newIEvent = new EventEmitter<number>();

  
  i: number =0;


  constructor() { }

  ngOnInit(): void {
  }


  increasingNumber() {
    this.i = this.i+ 1 ;
    this.newIEvent.emit(this.i);
  }
 




  // title = 'the title';
  // click() {
  //   this.title += "button was clicked";
  // }

  // getIngredients(){
  //   this.http.getIngredients().subscribe({
  //     next: (_res: any) => {
  //       this
  //     }
  //   })
  // }


}
