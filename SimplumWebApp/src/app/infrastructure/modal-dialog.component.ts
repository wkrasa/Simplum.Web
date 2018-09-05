import { Component, EventEmitter, Input, Output, ElementRef, OnInit, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
    selector: 'modal-dialog',
    template: `<div class="modal fade" id="{{modalId}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <ng-content></ng-content>
                    </div>
                  </div>
                </div>`,
})
export class ModalDialogComponent implements OnInit, OnDestroy
{
    
    @Input() modalId: string;
    @Output() opened = new EventEmitter();
    @Output() closed = new EventEmitter();

    constructor(private element: ElementRef) {
    }

    ngOnInit(): void{
        console.dir('ngOnInit +++++++++++++++++++ ' + ('#' + this.modalId).length);
        $('#' + this.modalId).modal({
            keyboard: false
        });

        $('#' + this.modalId).on('show.bs.modal', function (e: any) {
            console.dir('opened +++++++++++++++++++');
            this.opened().emit();
        });

        $('#' + this.modalId).on('hide.bs.modal', function (e: any) {
            this.closed().emit();
        });
    }

    ngOnDestroy(): void {
        $('#' + this.modalId).modal('dispose');
    }

    open() {
        $('#' + this.modalId).modal('show');
    }

    close() {
        $('#' + this.modalId).modal('hide')
    }
}
