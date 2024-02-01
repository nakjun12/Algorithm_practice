//1927 최소힙

const input = require("fs")
  .readFileSync("202402/01/1927.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    let element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent < element) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return 0;

    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }

    return min;
  }

  sinkDown(index) {
    const element = this.heap[0];
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (element > leftChild) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && element > rightChild) ||
          (swap !== null && leftChild > rightChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

const minHeap = new MinHeap();

let answer = "";
const n = input[0];
const arr = input.slice(1);

for (let num of arr) {
  if (num === 0) {
    answer += `${minHeap.extractMin()}\n`;
  } else {
    minHeap.insert(num);
  }
}

console.log(answer);
