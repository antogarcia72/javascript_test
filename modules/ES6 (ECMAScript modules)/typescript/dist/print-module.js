define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PrintModule = void 0;
    var PrintModule = /** @class */ (function () {
        function PrintModule() {
        }
        PrintModule.prototype.printMessage = function (message) {
            console.log(message);
        };
        return PrintModule;
    }());
    exports.PrintModule = PrintModule;
    ;
});
