class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  toArray() {
    if (this.isEmpty()) {
      console.log("Nothing Here");
    } else {
      var arr = [];
      var runner = this.head;
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }
  }

  insertAtBack(val) {
    if (this.isEmpty()) {
      this.head = new Node(val);
    } else {
      var runner = this.head;
      while (runner.next != null) {
        runner = runner.next;
      }
      runner.next = new Node(val);
    }
  }
}

var mySLL = new SLL();
// console.log(mySLL.isEmpty());
// console.log(mySLL.isEmpty());
mySLL.insertAtBack(3);
mySLL.insertAtBack(4);
mySLL.insertAtBack(5);
console.log(mySLL);
console.log(mySLL.toArray());
