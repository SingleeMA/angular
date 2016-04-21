import { unimplemented } from 'angular2/src/facade/exceptions';
export class RenderComponentType {
    constructor(id, templateUrl, slotCount, encapsulation, styles) {
        this.id = id;
        this.templateUrl = templateUrl;
        this.slotCount = slotCount;
        this.encapsulation = encapsulation;
        this.styles = styles;
    }
}
export class RenderDebugInfo {
    get injector() { return unimplemented(); }
    get component() { return unimplemented(); }
    get providerTokens() { return unimplemented(); }
    get locals() { return unimplemented(); }
    get source() { return unimplemented(); }
}
export class Renderer {
}
/**
 * Injectable service that provides a low-level interface for modifying the UI.
 *
 * Use this service to bypass Angular's templating and make custom UI changes that can't be
 * expressed declaratively. For example if you need to set a property or an attribute whose name is
 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
 * respectively.
 *
 * If you are implementing a custom renderer, you must implement this interface.
 *
 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
 */
export class RootRenderer {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1rS0xyR2tPUC50bXAvYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdDQUFnQztBQUk1RDtJQUNFLFlBQW1CLEVBQVUsRUFBUyxXQUFtQixFQUFTLFNBQWlCLEVBQ2hFLGFBQWdDLEVBQVMsTUFBNkI7UUFEdEUsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUF1QjtJQUFHLENBQUM7QUFDL0YsQ0FBQztBQUVEO0lBQ0UsSUFBSSxRQUFRLEtBQWUsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRCxJQUFJLFNBQVMsS0FBVSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELElBQUksY0FBYyxLQUFZLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsSUFBSSxNQUFNLEtBQThCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsSUFBSSxNQUFNLEtBQWEsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQ7QUF5Q0EsQ0FBQztBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBRUg7QUFFQSxDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VuaW1wbGVtZW50ZWR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7SW5qZWN0b3IsIEluamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcblxuZXhwb3J0IGNsYXNzIFJlbmRlckNvbXBvbmVudFR5cGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIHRlbXBsYXRlVXJsOiBzdHJpbmcsIHB1YmxpYyBzbG90Q291bnQ6IG51bWJlcixcbiAgICAgICAgICAgICAgcHVibGljIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLCBwdWJsaWMgc3R5bGVzOiBBcnJheTxzdHJpbmcgfCBhbnlbXT4pIHt9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW5kZXJEZWJ1Z0luZm8ge1xuICBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3IgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG4gIGdldCBjb21wb25lbnQoKTogYW55IHsgcmV0dXJuIHVuaW1wbGVtZW50ZWQoKTsgfVxuICBnZXQgcHJvdmlkZXJUb2tlbnMoKTogYW55W10geyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG4gIGdldCBsb2NhbHMoKToge1trZXk6IHN0cmluZ106IHN0cmluZ30geyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9XG4gIGdldCBzb3VyY2UoKTogc3RyaW5nIHsgcmV0dXJuIHVuaW1wbGVtZW50ZWQoKTsgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVuZGVyZXIge1xuICBhYnN0cmFjdCBzZWxlY3RSb290RWxlbWVudChzZWxlY3Rvck9yTm9kZTogc3RyaW5nIHwgYW55LCBkZWJ1Z0luZm86IFJlbmRlckRlYnVnSW5mbyk6IGFueTtcblxuICBhYnN0cmFjdCBjcmVhdGVFbGVtZW50KHBhcmVudEVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nLCBkZWJ1Z0luZm86IFJlbmRlckRlYnVnSW5mbyk6IGFueTtcblxuICBhYnN0cmFjdCBjcmVhdGVWaWV3Um9vdChob3N0RWxlbWVudDogYW55KTogYW55O1xuXG4gIGFic3RyYWN0IGNyZWF0ZVRlbXBsYXRlQW5jaG9yKHBhcmVudEVsZW1lbnQ6IGFueSwgZGVidWdJbmZvOiBSZW5kZXJEZWJ1Z0luZm8pOiBhbnk7XG5cbiAgYWJzdHJhY3QgY3JlYXRlVGV4dChwYXJlbnRFbGVtZW50OiBhbnksIHZhbHVlOiBzdHJpbmcsIGRlYnVnSW5mbzogUmVuZGVyRGVidWdJbmZvKTogYW55O1xuXG4gIGFic3RyYWN0IHByb2plY3ROb2RlcyhwYXJlbnRFbGVtZW50OiBhbnksIG5vZGVzOiBhbnlbXSk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgYXR0YWNoVmlld0FmdGVyKG5vZGU6IGFueSwgdmlld1Jvb3ROb2RlczogYW55W10pOiB2b2lkO1xuXG4gIGFic3RyYWN0IGRldGFjaFZpZXcodmlld1Jvb3ROb2RlczogYW55W10pOiB2b2lkO1xuXG4gIGFic3RyYWN0IGRlc3Ryb3lWaWV3KGhvc3RFbGVtZW50OiBhbnksIHZpZXdBbGxOb2RlczogYW55W10pOiB2b2lkO1xuXG4gIGFic3RyYWN0IGxpc3RlbihyZW5kZXJFbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogRnVuY3Rpb247XG5cbiAgYWJzdHJhY3QgbGlzdGVuR2xvYmFsKHRhcmdldDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xuXG4gIGFic3RyYWN0IHNldEVsZW1lbnRQcm9wZXJ0eShyZW5kZXJFbGVtZW50OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIGFic3RyYWN0IHNldEVsZW1lbnRBdHRyaWJ1dGUocmVuZGVyRWxlbWVudDogYW55LCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFVzZWQgb25seSBpbiBkZWJ1ZyBtb2RlIHRvIHNlcmlhbGl6ZSBwcm9wZXJ0eSBjaGFuZ2VzIHRvIGRvbSBub2RlcyBhcyBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0QmluZGluZ0RlYnVnSW5mbyhyZW5kZXJFbGVtZW50OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgYWJzdHJhY3Qgc2V0RWxlbWVudENsYXNzKHJlbmRlckVsZW1lbnQ6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcsIGlzQWRkOiBib29sZWFuKTtcblxuICBhYnN0cmFjdCBzZXRFbGVtZW50U3R5bGUocmVuZGVyRWxlbWVudDogYW55LCBzdHlsZU5hbWU6IHN0cmluZywgc3R5bGVWYWx1ZTogc3RyaW5nKTtcblxuICBhYnN0cmFjdCBpbnZva2VFbGVtZW50TWV0aG9kKHJlbmRlckVsZW1lbnQ6IGFueSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk7XG5cbiAgYWJzdHJhY3Qgc2V0VGV4dChyZW5kZXJOb2RlOiBhbnksIHRleHQ6IHN0cmluZyk7XG59XG5cbi8qKlxuICogSW5qZWN0YWJsZSBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgYSBsb3ctbGV2ZWwgaW50ZXJmYWNlIGZvciBtb2RpZnlpbmcgdGhlIFVJLlxuICpcbiAqIFVzZSB0aGlzIHNlcnZpY2UgdG8gYnlwYXNzIEFuZ3VsYXIncyB0ZW1wbGF0aW5nIGFuZCBtYWtlIGN1c3RvbSBVSSBjaGFuZ2VzIHRoYXQgY2FuJ3QgYmVcbiAqIGV4cHJlc3NlZCBkZWNsYXJhdGl2ZWx5LiBGb3IgZXhhbXBsZSBpZiB5b3UgbmVlZCB0byBzZXQgYSBwcm9wZXJ0eSBvciBhbiBhdHRyaWJ1dGUgd2hvc2UgbmFtZSBpc1xuICogbm90IHN0YXRpY2FsbHkga25vd24sIHVzZSB7QGxpbmsgI3NldEVsZW1lbnRQcm9wZXJ0eX0gb3Ige0BsaW5rICNzZXRFbGVtZW50QXR0cmlidXRlfVxuICogcmVzcGVjdGl2ZWx5LlxuICpcbiAqIElmIHlvdSBhcmUgaW1wbGVtZW50aW5nIGEgY3VzdG9tIHJlbmRlcmVyLCB5b3UgbXVzdCBpbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UuXG4gKlxuICogVGhlIGRlZmF1bHQgUmVuZGVyZXIgaW1wbGVtZW50YXRpb24gaXMgYERvbVJlbmRlcmVyYC4gQWxzbyBhdmFpbGFibGUgaXMgYFdlYldvcmtlclJlbmRlcmVyYC5cbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUm9vdFJlbmRlcmVyIHtcbiAgYWJzdHJhY3QgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IFJlbmRlckNvbXBvbmVudFR5cGUpOiBSZW5kZXJlcjtcbn1cbiJdfQ==