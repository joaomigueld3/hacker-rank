// binary search only works if the array is sorted
function sortArray (array) {
    if (array.length < 1) return null;
    let arraySorted = array.sort((a,b) => { return a - b })
    return arraySorted

}

// console.log(sortArray([3,2,1,5,6,4,2,1]))


function binarySearch (array, target) {
    if (array.length < 1) return null;
    let low = 0;
    let high = array.length-1

    while (low <= high) {
        const middle = Math.floor((low + high)/2);
        const temp = array[middle]
        
        if (target === temp) return middle

        if (target < temp) {
            high = middle - 1
        }
        else if (target > temp) {
            low = middle + 1
        }
    }
    return null
    }
    

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10))
