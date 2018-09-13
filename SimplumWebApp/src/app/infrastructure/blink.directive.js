"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent(element) {
        this.element = element;
        this.opened = new core_1.EventEmitter();
        this.closed = new core_1.EventEmitter();
    }
    ModalDialogComponent.prototype.ngOnInit = function () {
        console.dir('ngOnInit +++++++++++++++++++ ' + ('#' + this.modalId).length);
        $('#' + this.modalId).modal({
            keyboard: false
        });
        $('#' + this.modalId).on('show.bs.modal', function (e) {
            console.dir('opened +++++++++++++++++++');
            this.opened().emit();
        });
        $('#' + this.modalId).on('hide.bs.modal', function (e) {
            this.closed().emit();
        });
    };
    ModalDialogComponent.prototype.ngOnDestroy = function () {
        $('#' + this.modalId).modal('dispose');
    };
    ModalDialogComponent.prototype.open = function () {
        $('#' + this.modalId).modal('show');
    };
    ModalDialogComponent.prototype.close = function () {
        $('#' + this.modalId).modal('hide');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ModalDialogComponent.prototype, "modalId", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ModalDialogComponent.prototype, "opened", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ModalDialogComponent.prototype, "closed", void 0);
    ModalDialogComponent = __decorate([
        core_1.Component({
            selector: 'modal-dialog',
            template: "<div class=\"modal fade\" id=\"{{modalId}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <ng-content></ng-content>\n                    </div>\n                  </div>\n                </div>",
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());
exports.ModalDialogComponent = ModalDialogComponent;
//# sourceMappingURL=modal-dialog.component.js.map