import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'toggle',
  template: `
    <div class="toggle" (click)="toggleState()">
        <div class="toggle-button" [class.on]="isOn()" [class.off]="!isOn()" [@state-button]="state"></div>
    </div>
  `,
  styles: [`
    .toggle{
      width: 140px;
      height: 70px;
      border: solid 1px gray;
      border-radius: 25px;
      position: relative;
    }

  .toggle-button{
        width: 64px;
        height: 64px;
        margin: 2px;
        border: solid 1px black;
        border-radius: 50%;
        float: left;
        position: absolute;
      }

    .toggle-button.on{
      left: 0;
      background: green;
    }

  .toggle-button.off{
      left: 70px;
      background: pink;
    }
  `],
  animations: [
    //trigger('state', [
    //  state('on', style({ background: 'green' })),
    //  state('off', style({ background: 'pink' })),
    //  transition('*=>*',  animate('300ms ease-in')),
    //]),
    trigger('state-button', [
      state('on', style({ left: 0,})),
      state('off', style({ left: 70 })),
      transition('*=>*', animate('300ms ease-in')),
    ])
  ],
})
export class ToggleComponent implements OnInit {

  @Input() state: 'on' | 'off' = 'off';
  @Output() stateChanged = new EventEmitter<boolean>();


  constructor() {
  }

  ngOnInit(): void {
    console.log('state: ' + this.state);
    this.stateChanged.emit(this.isOn());
  }

  toggleState() {
    this.state = this.state === 'on' ? 'off' : 'on';
    console.log('state: ' + this.state);   
    this.stateChanged.emit(this.isOn());
  }

  turnOn() {
    this.state = 'on';
  }

  turnOff() {
    this.state = 'off';
  }

  isOn(): boolean {
    return this.state === 'on' ? true : false;
  }
}
