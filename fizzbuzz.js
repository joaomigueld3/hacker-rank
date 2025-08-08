function isMultipleOfThree(n) {
    if(n%3==0) return true;
    return false;
}

function isMultipleOfFive(n) {
    if(n%5==0) return true;
    return false;
}

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++ ){        
        let multiOfTree = isMultipleOfThree(i);
        let multiofFive = isMultipleOfFive(i);
        if(multiOfTree && multiofFive) console.log('FizzBuzz')
        else if (multiOfTree && !multiofFive) console.log('Fizz')
        else if (!multiOfTree && multiofFive) console.log('Buzz')            
        else if (!multiOfTree && !multiofFive) console.log(i)
    }

}

fizzBuzz(15)