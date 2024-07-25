/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* var twoSum = function(nums, target) {
    let resArray = []
     
    for (let i= 0; i < nums.length; i++) {
        let curr = nums[i]
        for(let j= i+1; j < nums.length; j++) {
        let point = nums[j]
        let diff = target - curr
            if(diff === point) {
            resArray.push(i,j)
            break;
            }
        }
    }
    return resArray
};

const nums = [3,2,4]
const target = 6

console.log(twoSum(nums, target)) // Output: [0, 1] */


var twoSumMap = function(nums, target) {
    const hashMap = new Map();
    const n = nums.length
    const resArray = []

    for (let i=0; i < n; i++) {
        let diff = target - nums[i]
        if(hashMap.has(diff)) {
            resArray.push(hashMap.get(diff), i)
            break;
        }
        hashMap.set(nums[i],i)
    }
    return resArray
}

const nums1 = [3,2,4]
const target1 = 6

console.log(twoSumMap(nums1, target1)) // Output: [1, 2]