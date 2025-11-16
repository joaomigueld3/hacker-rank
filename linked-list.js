class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add to end of list
    append(value) {
        const newNode = new Node(value);
        // empty list -> add in head (begin)
        if (this.head === null) this.head = newNode; 
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }

            temp.next = newNode;
        }
        this.size++;
    }

    printList () {
        let temp = this.head;
        for (let i = 0; i < this.size; i++) {
            console.log(temp.val, ' -> ')
            temp = temp.next;
        }
    }
}

const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);
// List: 10 -> 20 -> 30
myList.printList();