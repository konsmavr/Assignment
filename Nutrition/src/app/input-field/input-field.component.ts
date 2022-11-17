import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() item!:string; 

  constructor() { }

  ngOnInit(): void {
  }

}
