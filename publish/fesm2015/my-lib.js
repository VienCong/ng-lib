import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class AlertComponent {
    constructor() {
        // Alert 类型
        this.type = 'info';
        // 是否显示图标，用于支持用户自定义图标
        this.showIcon = true;
        // 是否可关闭
        this.closeable = false;
        // 关闭回调
        this.closeEvent = new EventEmitter();
        this.hide = false;
    }
    close() {
        this.closeEvent.emit(true);
        this.hide = true;
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'dev-alert',
                template: "<div class=\"dev-alert {{ type }} \" *ngIf=\"!hide\">\r\n  <button type=\"button\" class=\"dev-close\" (click)=\"close()\" *ngIf=\"closeable\">\u5173\u95ED</button>\r\n  <span class=\"dev-alert-icon icon-{{ type }}\" *ngIf=\"showIcon\"></span>\r\n  <ng-content></ng-content>\r\n</div>",
                styles: [""]
            },] }
];
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    showIcon: [{ type: Input }],
    closeable: [{ type: Input }],
    closeEvent: [{ type: Output }]
};

class AlertModule {
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AlertComponent],
                imports: [CommonModule],
                exports: [
                    AlertComponent // 必要的导出
                ],
                providers: [],
            },] }
];

class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [AlertModule],
                providers: [],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibModule, AlertModule as ɵa, AlertComponent as ɵb };
//# sourceMappingURL=my-lib.js.map
