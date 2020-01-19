'use strict';
const util = require('util');
class Node {
    constructor(value, next = null) {
        this.value;
        this.next;
    }
}

class LinkedList {
    constructor(array) {
        // this.head = new Node();
        // this.head.value = array[i];
        //     this.head.next = null;//this.head;
        for (var i = 0; i < array.length; i++) { //number
            let newNode = new Node();
            newNode.value = array[i];
            newNode.next = null;
            if (i == 0) {
                this.head = newNode;
            } else {
                this.current.next = newNode;
            }
            this.current = newNode;
        }
    }
}

function myProgram(data) {
    // let newNode = new Node();
    const linkedList = new LinkedList(data);
    return linkedList.head;

    //myLinkedList(['y','a','k','o','v']); //['y','a','k','o','v'],2,'a' => yaakov
    //['y','a','k','o','v'],2,'a' => yaakov
    // var mylist2 = myLinkedList([1, 2, 3, 4, 6], 4, 5); //['y','a','k','o','v'],2,'a' => yaakov
    // myLinkedList(mylist1, 4, 5); //['y','a','k','o','v'],2,'a' => yaakov
    // node = new node(4, 5);
    // mylist.add(node);
    // mylist.remove(node);

}
console.log(util.inspect(myProgram([10, 20, 30, 40]), false, null, true /* enable colors */ ));
console.log(util.inspect(myProgram(['y', 'a', 'k', 'o', 'v']), false, null, true /* enable colors */ )); //['y','a','k','o','v'],2,'a' => yaakov