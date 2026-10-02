class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.myHead = null;
    this.myTail = null;
  }

  isEmpty() {
    if (this.myHead === null) {
      return true;
    } else {
      return false;
    }
  }

  append(value) {
    console.log(`adding a node with value ${value} to the end`);
    const myNewNode = new Node(value);
    if (this.isEmpty()) {
      this.myHead = myNewNode;
      this.myTail = myNewNode;
    } else {
      this.myTail.nextNode = myNewNode;
      this.myTail = myNewNode;
    }
  }

  prepend(value) {
    console.log(`adding a node with value ${value} to the beginning`);
    const myNewNode = new Node(value);
    if (this.isEmpty()) {
      this.myHead = myNewNode;
      this.myTail = myNewNode;
    } else {
      myNewNode.nextNode = this.myHead;
      this.myHead = myNewNode;
    }
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw RangeError;
    }

    let targetIndex = this.at(index);
    if (targetIndex !== undefined || index === this.size()) {
      let valuesToBeInserted = [...values];

      if (index === 0) {
        valuesToBeInserted.forEach((element) => {
          this.prepend(element);
        });
      } else if (index === this.size()) {
        valuesToBeInserted.forEach((element) => {
          this.append(element);
        });
      } else {
        let counter = 1;
        let parentBranchLeafNode = this.myHead;
        let tailBranchHeadNode = parentBranchLeafNode.nextNode;
        while (counter < index) {
          parentBranchLeafNode = parentBranchLeafNode.nextNode;
          tailBranchHeadNode = tailBranchHeadNode.nextNode;
          counter++;
        }

        valuesToBeInserted.forEach((element) => {
          let newNode = new Node(element);
          parentBranchLeafNode.nextNode = newNode;
          parentBranchLeafNode = parentBranchLeafNode.nextNode;
        });
        parentBranchLeafNode.nextNode = tailBranchHeadNode;
      }
    }
  }

  printLinkedList() {
    let currentNode = this.myHead;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.nextNode;
    }
  }

  toString() {
    let myString = "";
    if (this.isEmpty()) {
      myString = `( null )`;
      return myString;
    } else {
      myString = `(${this.myHead.value})`;
    }

    let currentNode = this.myHead.nextNode;
    while (currentNode !== null) {
      myString += ` -> (${currentNode.value})`;
      currentNode = currentNode.nextNode;
    }
    if (currentNode === null) {
      myString += ` -> (null)`;
    }
    return myString;
  }

  size() {
    let mySize = 0;
    if (this.isEmpty()) {
      return mySize;
    } else {
      let currentNode = this.myHead;
      mySize = 1;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        mySize++;
      }
      return mySize;
    }
  }

  head() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.myHead.value;
    }
  }

  tail() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.myTail.value;
    }
  }

  at(index) {
    if (this.isEmpty()) {
      return undefined;
    } else {
      let currentNode = this.myHead;
      let nodeCounter = 0;
      while ((currentNode !== null) & (nodeCounter < index)) {
        currentNode = currentNode.nextNode;
        nodeCounter++;
      }
      if (currentNode !== null && nodeCounter === index) {
        return currentNode.value;
      } else if (currentNode === null) {
        return undefined;
      }
    }
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      let targetNode = this.myHead;
      this.myHead = this.myHead.nextNode;
      return targetNode.value;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size() - 1 || this.size() === 0) {
      throw RangeError;
    }

    if (index === 0) {
      console.log(`Removing ${this.myHead.value}`);
      this.myHead = this.myHead.nextNode;
    } else if (index === this.size() - 1) {
      let newTailIndex = 0;
      this.myTail = this.myHead;

      while (newTailIndex < index - 1) {
        this.myTail = this.myTail.nextNode;
        newTailIndex++;
      }
      console.log(`Removing ${this.myTail.nextNode.value}`);
      this.myTail.nextNode = null;
    } else {
      let newTailIndex = 0;
      let currentNode = this.myHead;

      while (newTailIndex < index - 1) {
        currentNode = currentNode.nextNode;
        newTailIndex++;
      }
      console.log(`Removing ${currentNode.nextNode.value}`);
      currentNode.nextNode = currentNode.nextNode.nextNode;
    }
  }

  contains(value) {
    let currentNode = this.myHead;
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      if (currentNode !== null && currentNode.value === value) {
        return true;
      }
    }
    return false;
  }

  findIndex(value) {
    let currentNode = this.myHead;
    let counter = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return counter;
      }
      currentNode = currentNode.nextNode;
      counter++;
    }
    return -1;
  }
}

export { LinkedList, Node };
