/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let table = [];
    while(headA) {
        !table.includes(headA) && table.push(headA);
        headA = headA.next;
    }
    
    while(headB) {
        if(table.includes(headB))
            return headB;
        headB = headB.next;
    }
    
    return null;
};
