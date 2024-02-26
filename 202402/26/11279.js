//최대힙

const input = require("fs")
  .readFileSync("202402/26/11279.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MaxHeap {
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
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent > element) return;

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 0) return 0;

    let max = this.heap[0];
    let last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    let element = this.heap[index];
    let length = this.heap.length;

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];

        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && leftChild < rightChild)
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
}

const maxHeap = new MaxHeap();

let answer = "";

const arr = input.slice(1);

for (let num of arr) {
  if (num === 0) {
    answer += `${maxHeap.extractMax()}\n`;
  } else {
    maxHeap.insert(num);
  }
}

console.log(answer);
