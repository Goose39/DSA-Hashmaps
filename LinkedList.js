class LinkedList {
  constructor() {
      this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(beforeItem, newItem) {
    // if node is to go before head item
    if (this.head.value === beforeItem) {
      this.head = this.head.newItem;
      return;
  }

    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== beforeItem)) {
        // Save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    previousNode.next = new _Node(newItem, currNode);

  }

  insertAfter(after, newItem) {
    // if list is empty
    if (!this.head) {
      console.log('List is empty');
      return;
    }

    let item = this.find(after);
    let nextItem = item.next

    item.next = new _Node(newItem, nextItem);


  }

  insertAt(num, newItem) {
    if (this.head === null) {
      console.log('Item not found');
      return;
    }

    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    for (let i = 1; i <= num; i++) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }

    previousNode.next = new _Node(newItem, currNode);

  }

  insertLast(item) {
    if (this.head === null) {
        this.insertFirst(item);
    }
    else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
    }
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
        /* Return null if it's the end of the list 
          and the item is not on the list */
        if (currNode.next === null) {
            return null;
        }
        else {
            // Otherwise, keep looking 
            currNode = currNode.next;
        }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
        this.head = this.head.next;
        return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
        // Save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    previousNode.next = currNode.next;
  }
}

class _Node {
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

module.exports = LinkedList;