//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value    
    this.next = next
    this.prev = prev
  }
}

export class LinkedList {
  constructor() {
        this.next = this
        this.prev = this
        this.length = 0
      }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail; // not found in SLL
      this.tail = newNode;
    }
      this.length++;
      return this;
  }

  

  pop() {
    if (this.length === 0) { 
        return false;
    }
    const popped = this.tail.value;
    const newTail = this.tail.prev;

    if (newTail) {
     newTail.next = null;
     this.tail.prev = null;
    } else {
     this.head = null;
    }
     this.tail = newTail;
     this.length--;

    return popped;
  }

  shift () {
    if (!this.head) {
        return false;
    }
    const shiftedNode = this.head;
    const newHead = this.head.next;
    if (this.head !== this.tail) {
        newHead.prev = null;
        shiftedNode.next = null;
    } else {
        this.tail = null;
    }
      this.head = newHead;
      this.length--;
      return shiftedNode.value;
  }

  unshift (val) {
    const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
  }


  delete(val) {
    if (!this.head) 
      return false; 
    if (this.head.next==null && this.head.value==val){
        this.length--;
        this.head=null;
      } else { 
      for (let node = this.head; node != null; node = node.next) {
        if (node.value === val) {
          
          if (node.prev != null) 
            node.prev.next = node.next

          if (node.next != null) 
            node.next.prev = node.prev

          if (node.next = null)
            this.head = node.prev

          this.length--;
          return this.length;
      } 
    }
    }
  }

  count () {
    return this.length;
  }

}

// class Node {
//   constructor(value = null, next = null, prev = null) {
//     this.value = value    
//     this.next = next
//     this.prev = prev
//   }
// }

// export class LinkedList {
//   constructor() {
//     this.next = this
//     this.prev = this
//     this._count = 0
//   }

//   push(v) {
//     let node = new Node(v, this.prev.next, this.prev)
//     this.prev.next = node
//     this.prev = node
//     this._count += 1
//   }

//   pop() {
//     let node = this.prev
//     this.prev = node.prev
//     node.prev.next = node.next
//     this._count -= 1
//     return node.value
//   }

//   shift() {
//     let node = this.next
//     this.next = node.next
//     node.next.prev = node.prev
//     this._count -= 1
//     return node.value
//   }

//   unshift(v) {
//     let node = new Node(v, this.next, this.next.prev)
//     this.next.prev = node
//     this.next = node
//     this._count += 1
//   }

//   delete(v) {
//     for (let node = this.next; node != this; node = node.next) {
//       if (node.value === v) {
//         node.prev.next = node.next
//         node.next.prev = node.prev
//         this._count -= 1
//         break
//       }
//     }
//   }

//   count() {
//     return this._count
//   }
// }