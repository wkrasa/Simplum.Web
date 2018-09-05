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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var sows_service_1 = require("./sows.service");
var SowDetailsComponent = /** @class */ (function () {
    function SowDetailsComponent(route, location, sowsService) {
        this.route = route;
        this.location = location;
        this.sowsService = sowsService;
    }
    SowDetailsComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    SowDetailsComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.sowsService.getSow(id)
            .subscribe(function (sow) { return _this.sow = sow; });
    };
    SowDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    SowDetailsComponent = __decorate([
        core_1.Component({
            selector: 'sow-details',
            template: "\n        <button (click)=\"goBack()\">go back</button>\n        <div *ngIf=\"sow\">              \n            <h1>Sow details</h1>\n            <label> name: <span>{{sow.name}}</span></label>\n            <label>elir: <span>{{sow.elir}}</span></label>\n        </div>\n            ",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            sows_service_1.SowsService])
    ], SowDetailsComponent);
    return SowDetailsComponent;
}());
exports.SowDetailsComponent = SowDetailsComponent;
//# sourceMappingURL=sow-details.component.js.map