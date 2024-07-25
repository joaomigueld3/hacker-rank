/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
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

console.log(twoSum(nums, target)) // Output: [0, 1]