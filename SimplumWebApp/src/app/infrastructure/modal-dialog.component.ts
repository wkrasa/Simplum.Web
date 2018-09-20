import { Component, EventEmitter, Input, Output, ElementRef, OnInit, OnDestroy, } from '@angular/core';
import { trigger, animate, style, state, group, animateChild, query, stagger, transition } from '@angular/animations';
declare var $: any;

@Component({
  selector: 'modal-dialog',
  template: `<div class="custom-modal" [@isVisible]="isVisible" [ngClass]="myClasses">
            <div>header 222</div>
                  <ng-content></ng-content>
            </div>`,
  animations: [trigger('isVisible', [
    state('false', style({
      display: 'none'
    })),
    state('true', style({
    })),
    transition('false=>true', [style({ opacity: 0.0, transform: 'translateX(-100%)' }), animate(200, style({ opacity: 1, transform: 'translateX(0)' }))]),
    transition('true=>false', [animate(200, style({ opacity: 0, transform: 'translateX(100%)' }))])
  ])]
})
export class ModalDialogComponent implements OnInit, OnDestroy {
  //@Output() opened = new EventEmitter();
  //@Output() closed = new EventEmitter();

  private _isVisible: boolean;

  @Input('isVisible')
  public set isVisible(value: boolean) {
    console.dir(`${this._isVisible} -> ${value}`)
    this._isVisible = value;
  }

  public get isVisible(): boolean {
    return this._isVisible;
  }

  myClasses = {
    red: true,
    //hidden: true
  };

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    //this.isVisible = true;
    console.dir('Visible: ' + this.isVisible);
    //this.myClasses.hidden = this.isVisible;
  }

  ngOnDestroy(): void {
  }

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
}

//import { Component, EventEmitter, Input, Output, ElementRef, OnInit, OnDestroy } from '@angular/core';
//declare var $: any;

//@Component({
//  selector: 'modal-dialog',
//  template: `<div class="modal fade" id="{{modalId}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//                  <div class="modal-dialog" role="document">
//                    <div class="modal-content">
//                        <ng-content></ng-content>
//                    </div>
//                  </div>
//                </div>`,
//})
//export class ModalDialogComponent implements OnInit, OnDestroy {

//  @Input() modalId: string;
//  @Output() opened = new EventEmitter();
//  @Output() closed = new EventEmitter();

//  constructor(private element: ElementRef) {
//  }

//  ngOnInit(): void {
//    console.dir('ngOnInit +++++++++++++++++++ ' + ('#' + this.modalId).length);
//    $('#' + this.modalId).modal({
//      keyboard: false
//    });

//    $('#' + this.modalId).on('show.bs.modal', function (e: any) {
//      console.dir('opened +++++++++++++++++++');
//      this.opened().emit();
//    });

//    $('#' + this.modalId).on('hide.bs.modal', function (e: any) {
//      this.closed().emit();
//    });
//  }

//  ngOnDestroy(): void {
//    $('#' + this.modalId).modal('dispose');
//  }

//  open() {
//    $('#' + this.modalId).modal('show');
//  }

//  close() {
//    $('#' + this.modalId).modal('hide')
//  }
//}
