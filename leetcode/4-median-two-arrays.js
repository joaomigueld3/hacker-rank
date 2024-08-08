/**
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let resArray = []
    let median = 0

    for (elements of nums1) {
        resArray.push(elements)
    }
    for (elements of nums2) {
        resArray.push(elements)
    }
    resArray.sort((a,b) => a - b)

    if (resArray.length % 2 === 0) {
        median = (resArray[resArray.length/2] + resArray[resArray.length/2 -1]) / 2               
    }
    else median = resArray[Math.floor(resArray.length/2)]

    return median
};

const nums1 = [1,3], nums2 = [2]
console.log(findMedianSortedArrays(nums1, nums2))
const nums3 = [1,2], nums4 = [3,4]
console.log(findMedianSortedArrays(nums3, nums4))

