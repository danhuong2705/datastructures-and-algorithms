class Array {
  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.array = this.createArray(this.capacity);
  }

  createArray(capacity) {
    return new Array(capacity);
  }

  resize(newCapacity) {
    let newArray = this.createArray(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    this.capacity = newCapacity;
  }

  //Return number of nodes are currently stored in list
  size() {
    return this.size;
  }

  //Return number of items array can hold
  capacity() {
    return this.capacity;
  }

  //If array is empty, return true. Otherwise, return false
  isEmpty() {
    return this.size === 0;
  }

  //Return item at given index
  itemAt(index) {
    for (let i = 0; i < this.size; i++) {
      if (i === index) {
        return this.array[i];
      }
    }
  }

  //Append given item to the end of array
  append(item) {
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2);
    }
    this.array[this.size] = item;
    this.size++;
  }

  //Insert item at given index
  insert(item, index) {
    if (index < 0 || index >= this.size) {
      throw "Index out of range";
    }
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2);
    }
    for (let i = this.size; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }
    this.array[index] = item;
    this.size++;
  }

  //Remove last item and return its value 
  pop() {
    if (this.size === 0) return undefined;
    let lastItem = this.array[this.size - 1];
    this.size--;
    if (this.size <= this.capacity / 4) {
      this.resize(this.capacity / 2);
    }
    return lastItem;
  }

  //Remove item at given index and return its value
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw "Index out of range";
    }
    let removedItem = this.array[index];
    for (let i = index; i < this.size; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.size--;
    if (this.size <= this.capacity / 4) {
      this.resize(this.capacity / 2);
    }
    return removedItem;
  }
}
