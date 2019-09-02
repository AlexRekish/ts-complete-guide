"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(i, j) {
        return this.data[i] > this.data[j];
    }
    swap(i, j) {
        const leftHand = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = leftHand;
    }
}
exports.NumberCollection = NumberCollection;
