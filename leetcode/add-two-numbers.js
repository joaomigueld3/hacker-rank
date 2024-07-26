/**
 *  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let l1String = ''
    let l2String = ''

    while(l1.length > 0) {
        l1String  = l1String.concat(l1.pop())
    }
    while(l2.length > 0) {
        l2String = l2String.concat(l2.pop())
    }

    const sum = BigInt(l1String) + BigInt(l2String)
    const sumString = sum.toString()
    let resList = new ListNode()

    /* for (let i = sumString.length - 1; i >= 0; i--){
        resArray.push(parseInt(sumString.charAt(i)))
    } */
    for (let i = sumString.length - 1; i >= 0; i--){
        let num = (parseInt(sumString.charAt(i)))
        resList.val = num;
        resList.next = new ListNode(num)
        resList = resList.next
    }

    

    return resList.next;
    
};


const l1 = new ListNode(2, new ListNode(4, new ListNode(3))) // [2,4,3]
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)) ) // [5,6,4]

console.log(addTwoNumbers(l1, l2)) // Output: [7,0,8]
//342 + 465 = 807