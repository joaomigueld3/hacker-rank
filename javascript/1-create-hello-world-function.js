/**
 * https://leetcode.com/problems/create-hello-world-function?envType=study-plan-v2&envId=30-days-of-javascript
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};


const f = createHelloWorld();
 // "Hello World"
console.log(f())