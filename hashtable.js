class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Return number of nodes are currently stored in list.
  size() {
    return this.length;
  }

  // Determine list is empty or not.
  isEmpty() {
    return this.length === 0;
  }

  //valueAt(index): Return value of node at given index.
  valueAt(index) {
    if (!this.length || index < 0 || index > this.length) {
      return null;
    } else {
      let currentNode;
      if (index < this.length / 2) {
        currentNode = this.head;
        let count = 0;
        while (count < index) {
          currentNode = currentNode.next;
          count++;
        }
      } else {
        currentNode = this.tail;
        let count = this.length - 1;
        while (count > index) {
          currentNode = currentNode.prev;
          count--;
        }
      }
      return currentNode;
    }
  }

  //Add a node with value to the front of list.
  pushFront(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  //Remove front node and return its value.
  popFront() {
    if (!this.length) {
      return null;
    } else {
      let firstNode = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
        firstNode.next = null;
      }
    }
    this.length--;
  }

  //Add a node with value to the end of list.
  pushBack(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  //Remove last node and return its value.
  popBack() {
    if (!this.length) return null;
    else {
      let lastNode = this.tail;
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        lastNode.prev = null;
        this.length--;
        return lastNode;
      }
    }
    this.length--;
  }

  //Return value of front node
  front() {
    return this.head;
  }

  //Return value of last node.
  back() {
    return this.tail;
  }

  display() {
    let currentNode = this.head;
    let count = 0;
    while (count < this.length) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
      count++;
    }
  }

  //Insert a node with value at given index.
  insert(index, value) {
    let newNode = new Node(value);
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === 0) {
      this.pushFront(value);
    } else if (index === this.length) {
      this.pushBack(value);
    } else {
      let currentNode = this.valueAt(index);
      let prevCurrentNode = this.valueAt(index - 1);

      newNode.next = currentNode;
      currentNode.prev = newNode;

      newNode.prev = prevCurrentNode;
      prevCurrentNode.next = newNode;
      this.length++;
    }
  }

  //Remove node at given index.
  removeAt(index) {
    if (!this.length || index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      this.popFront();
    } else if (index === this.length - 1) {
      this.popBack();
    } else {
      let removedNode = this.valueAt(index);
      let prevRemovedNode = removedNode.prev;
      let nextRemovedNode = removedNode.next;

      removedNode.next = null;
      removedNode.prev = null;

      prevRemovedNode.next = nextRemovedNode;
      nextRemovedNode.prev = prevRemovedNode;
      this.length--;
    }
  }
}

const DEFAULT_HASTABLE_SIZE = 10;
class HashTable {
  constructor() {
    this.buckets = new Array(DEFAULT_HASTABLE_SIZE)
      .fill(null)
      .map(() => new DoublyLinkedList());
  }
  hash(key) {
    return key % DEFAULT_HASTABLE_SIZE;
  }
  find(linklist, key) {
    let head = linklist.head;
    while (head !== null) {
      if (head.value.key == key) return head;
      head = head.next;
    }
    return -1;
  }
  add(key, value) {
    let position = this.hash(key);
    let linklist = this.buckets[position];
    let node = this.find(linklist, key);
    if (node !== -1) {
      node.value.value = value;
    } else this.buckets[position].pushFront({ key, value });
  }
  has(key) {
    return this.find(this.buckets[this.hash(key)], key) !== -1;
  }
  get(key) {
    if (!this.has(key)) return -1;
    return this.find(this.buckets[this.hash(key)], key).value.value;
  }
  remove(key) {
    let position = this.hash(key);
    let linklist = this.buckets[position];
    if (linklist.length == 0) return null;
    let removedNode = this.find(linklist, key);
    if (removedNode === linklist.head) {
      linklist.popFront();
    } else if (removedNode === linklist.tail) {
      linklist.popBack();
    } else {
      let prevRemovedNode = removedNode.prev;
      let nextRemovedNode = removedNode.next;

      removedNode.next = null;
      removedNode.prev = null;

      prevRemovedNode.next = nextRemovedNode;
      nextRemovedNode.prev = prevRemovedNode;
      this.length--;
    }
  }
}
let hashTable = new HashTable();
hashTable.add(1, 1);
hashTable.add(2, 2);
hashTable.add(2, 3);
hashTable.add(11, 12345);

console.log(hashTable.has(1));
console.log(hashTable.has(3));
console.log(hashTable.get(2));
console.log(hashTable.get(11));
console.log(hashTable.get(1));
hashTable.remove(2);
console.log(hashTable.get(2));
hashTable.remove(1);
console.log(hashTable.get(11));
console.log(hashTable.get(1));
