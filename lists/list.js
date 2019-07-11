'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }
  shift(arr) {
    let item = arr[0];
    delete arr[0];
    return item;
  }
  unshift(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i + 1] = arr[i];
    }
    arr[0] = item;
  }

  forEach(arr) {
    for (let i = 0; i < arr.length; i++) {
      return arr[i];
    }
  }
}

module.exports = List;
