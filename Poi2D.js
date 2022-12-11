"use strict";
exports.__esModule = true;
exports.Poi2D = void 0;
var Poi2D = /** @class */ (function () {
    function Poi2D(x, y) {
        this.x = 1.0;
        this.y = 1.0;
        this.x = x;
        this.y = y;
    }
    Poi2D.prototype.getX = function () {
        return this.x;
    };
    Poi2D.prototype.setX = function (x) {
        this.x = x;
    };
    Poi2D.prototype.getY = function () {
        return this.y;
    };
    Poi2D.prototype.setY = function (y) {
        this.y = y;
    };
    return Poi2D;
}());
exports.Poi2D = Poi2D;
