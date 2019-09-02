import { Sorter } from '../Sorter';

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  constructor() {
    super();
  }

  get length(): number {
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

  add(data: number): void {
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

  protected at(index: number): Node | never {
    if (!this.head) {
      throw new Error('Index out of bounds!');
    }

    let position = 0;
    let node: Node | null = this.head;

    while (node) {
      if (position === index) {
        return node;
      }

      position++;
      node = node.next;
    }

    throw new Error('Index out of bounds!');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty!');
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).value;
    this.at(leftIndex).value = this.at(rightIndex).value;
    this.at(rightIndex).value = leftHand;
  }

  print(): void {
    if (!this.head) {
      throw new Error('List is empty!');
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
