"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(name, area, radius) {
        this.name = name;
        this.area = area;
        this.radius = radius;
    }
    calculateArea() {
        let area = 3.14 * (this.radius) * this.radius;
        return area;
    }
    ;
}
exports.Circle = Circle;
