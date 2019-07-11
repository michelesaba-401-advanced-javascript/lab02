'use strict';

function List() {
  this.length = 0;
  this.arr = {};
}

List.prototype.push = function(item) {
  this.arr[this.length] = item;
  this.length++;
};

List.prototype.pop = function(arr) {
  let returnValue = this.arr[this.length];
  delete this.arr[this.length];
  this.length--;
  return returnValue;
};
List.prototype.shift = function(arr) {
  let item = this.arr[0];
  delete this.arr[0];
  return item;
};
List.prototype.unshift = function(array, item) {
  for (let i = arr.length - 1; i >=0; i--) {
    arr[i +1] = arr[i];
 }
 array[0] = item;
};
List.prototype.forEach = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[i];
  }
};

module.exports = List;
