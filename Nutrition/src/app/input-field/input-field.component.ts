import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() item!:string; 
  @Output() delete = new EventEmitter<string>();
  rd:boolean = true
  temp:string = '';


  constructor() { }

  ngOnInit(): void {
  }
  
  //when we want to delete an input field
  onDelete() {
     
    this.delete.emit(this.item)
    this.item = ""

  }

}
