/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = n => {
    let hashSet = [];
    while (n !== 1) {
        if (hashSet.includes(n)) return false;
        hashSet.push(n);
        n = n.toString().split('').map(i => i ** 2).reduce((sum, current) => sum + current, 0);
    }
    return true;
};
