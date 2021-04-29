import { Component, Input, Output, EventEmitter } from '@angular/core';
export class AlertComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVXZFLE1BQU0sT0FBTyxjQUFjO0lBV3pCO1FBVkEsV0FBVztRQUNGLFNBQUksR0FBYyxNQUFNLENBQUM7UUFDbEMscUJBQXFCO1FBQ1osYUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixRQUFRO1FBQ0MsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPO1FBQ0csZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzFFLFNBQUksR0FBRyxLQUFLLENBQUM7SUFFRSxDQUFDO0lBRWhCLEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix3U0FBcUM7O2FBRXRDOzs7O21CQUdFLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyDlrprkuYlhbGVydOacieWTquS6m+WPr+mAieexu+Wei1xyXG5leHBvcnQgdHlwZSBBbGVydFR5cGUgPSAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJyB8ICdpbmZvJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rldi1hbGVydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xyXG4gIC8vIEFsZXJ0IOexu+Wei1xyXG4gIEBJbnB1dCgpIHR5cGU6IEFsZXJ0VHlwZSA9ICdpbmZvJztcclxuICAvLyDmmK/lkKbmmL7npLrlm77moIfvvIznlKjkuo7mlK/mjIHnlKjmiLfoh6rlrprkuYnlm77moIdcclxuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XHJcbiAgLy8g5piv5ZCm5Y+v5YWz6ZetXHJcbiAgQElucHV0KCkgY2xvc2VhYmxlID0gZmFsc2U7XHJcbiAgLy8g5YWz6Zet5Zue6LCDXHJcbiAgQE91dHB1dCgpIGNsb3NlRXZlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBoaWRlID0gZmFsc2U7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjbG9zZSgpe1xyXG4gICAgdGhpcy5jbG9zZUV2ZW50LmVtaXQodHJ1ZSk7XHJcbiAgICB0aGlzLmhpZGUgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=