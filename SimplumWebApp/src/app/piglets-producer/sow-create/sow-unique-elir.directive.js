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
var sow_1 = require("./sow");
var sows_service_1 = require("./sows.service");
var SowEditComponent = /** @class */ (function () {
    function SowEditComponent(sowsService) {
        this.sowsService = sowsService;
    }
    SowEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", sow_1.Sow)
    ], SowEditComponent.prototype, "sow", void 0);
    SowEditComponent = __decorate([
        core_1.Component({
            selector: 'sow-edit',
            template: "\n                <div *ngIf=\"sow\">\n                    <h1>Sow edit</h1>\n                    <label>name:\n                        <input [(ngModel)]=\"sow.name\" placeholder=\"name\">\n                    </label>\n                    <label>elir:\n                        <input [(ngModel)]=\"sow.elir\" placeholder=\"elir\">\n                    </label>\n                </div>\n            ",
        }),
        __metadata("design:paramtypes", [sows_service_1.SowsService])
    ], SowEditComponent);
    return SowEditComponent;
}());
exports.SowEditComponent = SowEditComponent;
//# sourceMappingURL=sow-edit.component.js.map