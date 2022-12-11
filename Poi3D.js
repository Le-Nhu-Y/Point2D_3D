"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Poi3D = void 0;
var Poi2D_1 = require("./Poi2D");
var Poi3D = /** @class */ (function (_super) {
    __extends(Poi3D, _super);
    function Poi3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = 1.0;
        _this.z = z;
        return _this;
    }
    Poi3D.prototype.getZ = function () {
        return this.z;
    };
    Poi3D.prototype.setZ = function (z) {
        this.z = z;
    };
    return Poi3D;
}(Poi2D_1.Poi2D));
exports.Poi3D = Poi3D;
