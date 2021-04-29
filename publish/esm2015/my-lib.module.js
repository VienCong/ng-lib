import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from './alert/alert.module'; // 此处按照按需引入方式导入，my-lib对应我们的发布库名
export class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [AlertModule],
                providers: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Byb2plY3RzL215LWxpYi9teS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQyxDQUFDLCtCQUErQjtBQVFuRixNQUFNLE9BQU8sV0FBVzs7O1lBTHZCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLENBQUU7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDdEIsU0FBUyxFQUFFLEVBQUU7YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9hbGVydC9hbGVydC5tb2R1bGUnOyAvLyDmraTlpITmjInnhafmjInpnIDlvJXlhaXmlrnlvI/lr7zlhaXvvIxteS1saWLlr7nlupTmiJHku6znmoTlj5HluIPlupPlkI1cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXHJcbiAgZXhwb3J0czogW0FsZXJ0TW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlMaWJNb2R1bGUge30iXX0=