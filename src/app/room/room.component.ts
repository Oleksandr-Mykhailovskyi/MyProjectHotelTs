import {Component, Injectable, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-rooms',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  @Input() inputText: string = '';

  @Input() image: string = '';

  @Output() choice = new EventEmitter<void>();

  @Input() price: number = 0;

  @Input() howManyPeople: number = 0;

  @Input() breakfast: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
