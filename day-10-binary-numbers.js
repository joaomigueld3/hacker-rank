/* https://www.hackerrank.com/challenges/30-binary-numbers 
Receive in parameter integer base 10 number, convert to binary and print/return the longest sequence of 1's
Ex 1: input: n = 5, binary=101, answer: 1
Ex 2: input: n = 13, binary=1101, answer: 2
Ex 3: input: n = 439, binary=110110111, answer: 3
*/


function main(n) {    
    
    let sBinary = ''
    let stack = []
    let nQuotient = n
    
    while (Math.floor(nQuotient / 2) > 0) {
        const remainder = nQuotient % 2    
        stack.push(remainder)    
        nQuotient = Math.floor(nQuotient / 2)
        if(nQuotient === 1) stack.push(nQuotient)
    }
    console.log(stack)
    for (let i = stack.length; i > 0; i--) {
        sBinary+= stack.pop().toString()
    }
    console.log(sBinary, sBinary.length)
    
   
    let arrayOnes = []
    let count = 0
    for (let i = 0; i < sBinary.length; i++){
        if(parseInt(sBinary[i]) === 1){
            count+=1
        }
        if(i === sBinary.length-1) {
            arrayOnes.push(count)
            count = 0
        }
        else if (parseInt(sBinary[i]) === 0) {
            arrayOnes.push(count)
            count = 0
        }
    }
    console.log(arrayOnes)
    
    function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

let nMaxOnes = getMaxOfArray(arrayOnes)
     console.log(nMaxOnes)
}

main(439)