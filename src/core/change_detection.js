'use strict';/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */
"use strict";
var change_detection_1 = require('./change_detection/change_detection');
exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
exports.ExpressionChangedAfterItHasBeenCheckedException = change_detection_1.ExpressionChangedAfterItHasBeenCheckedException;
exports.ChangeDetectionError = change_detection_1.ChangeDetectionError;
exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
exports.WrappedValue = change_detection_1.WrappedValue;
exports.SimpleChange = change_detection_1.SimpleChange;
exports.IterableDiffers = change_detection_1.IterableDiffers;
exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
exports.CollectionChangeRecord = change_detection_1.CollectionChangeRecord;
exports.KeyValueChangeRecord = change_detection_1.KeyValueChangeRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtTmdEdWpLYjkudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRzs7QUFFSCxpQ0FvQk8scUNBQXFDLENBQUM7QUFuQjNDLDZFQUF1QjtBQUV2Qiw2SEFBK0M7QUFDL0MsdUVBQW9CO0FBRXBCLGlFQUFpQjtBQUVqQix1REFBWTtBQUNaLHVEQUFZO0FBRVosNkRBQWU7QUFHZiw2REFBZTtBQUdmLDJFQUFzQjtBQUN0Qix1RUFFMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hhbmdlIGRldGVjdGlvbiBlbmFibGVzIGRhdGEgYmluZGluZyBpbiBBbmd1bGFyLlxuICovXG5cbmV4cG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXG4gIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXhjZXB0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25FcnJvcixcblxuICBDaGFuZ2VEZXRlY3RvclJlZixcblxuICBXcmFwcGVkVmFsdWUsXG4gIFNpbXBsZUNoYW5nZSxcbiAgUGlwZVRyYW5zZm9ybSxcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJGYWN0b3J5LFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVyLFxuICBLZXlWYWx1ZURpZmZlckZhY3RvcnksXG4gIENvbGxlY3Rpb25DaGFuZ2VSZWNvcmQsXG4gIEtleVZhbHVlQ2hhbmdlUmVjb3JkLFxuICBUcmFja0J5Rm5cbn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuIl19