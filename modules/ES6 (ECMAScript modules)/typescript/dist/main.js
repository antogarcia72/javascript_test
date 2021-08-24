define(["require", "exports", "./print-module"], function (require, exports, print_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var printModule = new print_module_1.PrintModule();
    printModule.printMessage("Hello from module (ES6)");
});
