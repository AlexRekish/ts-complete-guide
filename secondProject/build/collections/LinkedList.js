"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("../Sorter");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds!');
        }
        let position = 0;
        let node = this.head;
        while (node) {
            if (position === index) {
                return node;
            }
            position++;
            node = node.next;
        }
        throw new Error('Index out of bounds!');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty!');
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.at(leftIndex).value;
        this.at(leftIndex).value = this.at(rightIndex).value;
        this.at(rightIndex).value = leftHand;
    }
    print() {
        if (!this.head) {
            throw new Error('List is empty!');
        }
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
