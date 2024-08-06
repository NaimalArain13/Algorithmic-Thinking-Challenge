"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerimeterOfRec = exports.calculateAreaOfRec = void 0;
function calculateAreaOfRec(width, height) {
    return width * height;
}
exports.calculateAreaOfRec = calculateAreaOfRec;
function calculatePerimeterOfRec(width, height) {
    return 2 * (width + height);
}
exports.calculatePerimeterOfRec = calculatePerimeterOfRec;
