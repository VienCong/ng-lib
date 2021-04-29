(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-lib'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
            // Alert 类型
            this.type = 'info';
            // 是否显示图标，用于支持用户自定义图标
            this.showIcon = true;
            // 是否可关闭
            this.closeable = false;
            // 关闭回调
            this.closeEvent = new core.EventEmitter();
            this.hide = false;
        }
        AlertComponent.prototype.close = function () {
            this.closeEvent.emit(true);
            this.hide = true;
        };
        return AlertComponent;
    }());
    AlertComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'dev-alert',
                    template: "<div class=\"dev-alert {{ type }} \" *ngIf=\"!hide\">\r\n  <button type=\"button\" class=\"dev-close\" (click)=\"close()\" *ngIf=\"closeable\">\u5173\u95ED</button>\r\n  <span class=\"dev-alert-icon icon-{{ type }}\" *ngIf=\"showIcon\"></span>\r\n  <ng-content></ng-content>\r\n</div>",
                    styles: [""]
                },] }
    ];
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        type: [{ type: core.Input }],
        showIcon: [{ type: core.Input }],
        closeable: [{ type: core.Input }],
        closeEvent: [{ type: core.Output }]
    };

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [AlertComponent],
                    imports: [common.CommonModule],
                    exports: [
                        AlertComponent // 必要的导出
                    ],
                    providers: [],
                },] }
    ];

    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        return MyLibModule;
    }());
    MyLibModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [AlertModule],
                    providers: [],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyLibModule = MyLibModule;
    exports.ɵa = AlertModule;
    exports.ɵb = AlertComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
