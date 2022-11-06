import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
// send data from parent to child
@Input() title:string="";
@Input() data:any[] = [];
// send data from child to parent
@Output() selectedValue = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event:any){
    // to send value to parent
    this.selectedValue.emit(event)
  }
}
