/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let table = [];
    while (head) {
        if(table.includes(head))
            return true;
        else
            table.push(head);
        head = head.next;
    }
    return false;
};
