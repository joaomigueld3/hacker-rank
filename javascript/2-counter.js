/**
 * https://leetcode.com/problems/counter?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    let count = 0;
    return function() {        
        let total = n+count;
        count++;
        return total;
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
