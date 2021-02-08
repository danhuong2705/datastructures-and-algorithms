class Heap {
  constructor() {
    this.size = 0;
    this.heap = [];
  }
  insert(x) {
    this.size++;
    this.heap[this.size - 1] = x;
    this.siftUp(this.size - 1);
  }
  siftUp(index) {
    if (index == 0) return;
    let parentIndex =
      Math.floor(index - 1 / 2) > 0 ? Math.floor(index - 1 / 2) : 0;

    if (this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
    }
    this.siftUp(parentIndex);
  }
  siftDown(index) {
    if (index >= this.size) return;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let parentIndex = index;
    if (left < this.size && this.heap[left] > this.heap[parentIndex])
      parentIndex = left;

    if (right < this.size && this.heap[right] > this.heap[parentIndex])
      parentIndex = right;

    [this.heap[index], this.heap[parentIndex]] = [
      this.heap[parentIndex],
      this.heap[index],
    ];
    this.siftDown(index + 1);
  }
  extract() {
    let max = this.heap[0];
    [this.heap[0], this.heap[this.size - 1]] = [
      this.heap[this.size - 1],
      this.heap[0],
    ];
    this.size--;

    this.siftDown(0);

    return max;
  }
}
let heap = new Heap();
heap.insert(5);
heap.insert(6);
heap.insert(3);
heap.insert(7);
heap.insert(2);
console.log(heap.extract());
console.log(heap.extract());
