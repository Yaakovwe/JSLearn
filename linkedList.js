'use strict';

class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
}

function myLinkedList(str, pos, value) {
    const splitStr = str.split("");
    // const strHead = splitStr[0];
    //  let myHead = new LinkedList(strHead);
    //  myHead.head = strHead;
    let myNode = new Node();
    let tail = myNode;
    //console.log(tail);
    for (let i = 0; i < splitStr.length - 1; i++) {
        if (i == (pos)) {
            tail.data = value;
            tail.next = splitStr[i];
        } else {
            tail.data = splitStr[i];
            tail.next = splitStr[i + 1];
            console.log(tail);
        }
    }
}


myLinkedList('yakov', 4, 'a'); //['y','a','k','o','v'],2,'a' => yaakov