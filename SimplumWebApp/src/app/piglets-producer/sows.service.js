"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var sows = [
    { id: 1, elir: '1111', name: 'sow1', birtDate: new Date('2015-01-11') },
    { id: 2, elir: '2222', name: null, birtDate: new Date('2016-01-01') },
    { id: 3, elir: '3333', name: 'sow3', birtDate: new Date('2016-03-01') },
    { id: 4, elir: '4444', name: 'sow4', birtDate: new Date('2017-04-22') }
];
var SowsService = /** @class */ (function () {
    function SowsService() {
    }
    SowsService.prototype.getSows = function () {
        return rxjs_1.of(sows);
    };
    SowsService.prototype.getSow = function (id) {
        return rxjs_1.of(sows.find(function (x) { return x.id === id; }));
    };
    SowsService = __decorate([
        core_1.Injectable()
    ], SowsService);
    return SowsService;
}());
exports.SowsService = SowsService;
//# sourceMappingURL=sows.service.js.map
