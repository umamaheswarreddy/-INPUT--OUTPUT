import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-title-editer',
  templateUrl: './title-editer.component.html',
  styleUrls: ['./title-editer.component.css']
})
export class TitleEditerComponent implements OnInit {

  @Input()
  webTitle:string;

  @Output()
  titleChanged : EventEmitter<string>;
  constructor() {
     this.titleChanged=new EventEmitter<string>();
   }

  ngOnInit() {
  }
  notifyTitleChanged(){
    this.titleChanged.emit(this.webTitle);
  }

}
