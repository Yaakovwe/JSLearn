'use strict';

class Node {
    constructor(value, next = null) {
        this.value = value,
            this.next = next
    }
}

class LinkedList {
    constructor(arr) {
        this.head = new Node();
        this.head.value = arr[0];
        this.head.next = new Node();
        arr.forEach(element => { //number
            this.head.next.value = element;
            this.head.next.next = new Node();
        });
    }
}

function myProgram(data) {
    // let newNode = new Node();
    const linkedList = new LinkedList(data);
    return linkedList.head;


    //myLinkedList('yakov', 4, 'a'); //['y','a','k','o','v'],2,'a' => yaakov
    //['y','a','k','o','v'],2,'a' => yaakov
    // var mylist2 = myLinkedList([1, 2, 3, 4, 6], 4, 5); //['y','a','k','o','v'],2,'a' => yaakov
    // myLinkedList(mylist1, 4, 5); //['y','a','k','o','v'],2,'a' => yaakov
    // node = new node(4, 5);
    // mylist.add(node);
    // mylist.remove(node);
}

console.log(myProgram([1, 2, 3, 4, 6]));