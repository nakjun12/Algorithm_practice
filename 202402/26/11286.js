const input = require("fs")
  .readFileSync("202402/26/11286.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class AbsoluteHeap {
  constructor() {
    this.heap = [];
  }

  insert(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (this.absCompare(parent, element)) break;

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  extractAbsMin() {
    if (this.heap.length === 0) return 0;

    let absMin = this.heap[0];
    let last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown();
    }
    return absMin;
  }

  sinkDown() {
    let length = this.heap.length;
    let index = 0;
    let element = this.heap[index];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (this.absCompare(leftChild, element)) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && this.absCompare(rightChild, element)) ||
          (swap !== null && this.absCompare(rightChild, leftChild))
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) return;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  absCompare(first, second) {
    let firstAbs = Math.abs(first);
    let secondAbs = Math.abs(second);

    return firstAbs < secondAbs || (firstAbs === secondAbs && first < second);
  }
}

const abssoluteHeap = new AbsoluteHeap();
const arr = input.slice(1);
let answer = "";
for (let num of arr) {
  if (num === 0) {
    answer += `${abssoluteHeap.extractAbsMin()}\n`;
  } else {
    abssoluteHeap.insert(num);
  }
}

console.log(answer);
