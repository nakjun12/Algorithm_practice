const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const heap = [];

function insert(num) {
  heap.push(num);
  bubbleUp(heap.length - 1);
}

function bubbleUp(index) {
  const element = heap[index];
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = heap[parentIndex];

    if (parent <= element) break;

    heap[index] = parent;
    heap[parentIndex] = element;
    index = parentIndex;
  }
}

function extractMin() {
  if (heap.length === 0) {
    return 0;
  }

  const min = heap[0];
  const last = heap.pop();
  if (heap.length > 0) {
    heap[0] = last;
    sinkDown(0);
  }
  return min;
}

function sinkDown(index) {
  const length = heap.length;
  const element = heap[0];

  while (true) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let leftChild, rightChild;
    let swap = null;

    if (leftChildIndex < length) {
      leftChild = heap[leftChildIndex];
      if (leftChild < element) {
        swap = leftChildIndex;
      }
    }

    if (rightChildIndex < length) {
      rightChild = heap[rightChildIndex];
      if (
        (swap === null && rightChild < element) ||
        (swap !== null && rightChild < leftChild)
      ) {
        swap = rightChildIndex;
      }
    }

    // swap 에 index를 넣어주는 것은 자리 바꾸기기에 더 용이하기때문
    if (swap === null) break;
    heap[index] = heap[swap];
    heap[swap] = element;
    index = swap;
  }
}

//실제 식
const operations = input.slice(1);
let answer = "";

for (let num of operations) {
  if (num === 0) {
    answer += `${extractMin()}\n`;
  } else {
    insert(num);
  }
}

console.log(answer);
