/*** 
* Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let lenOfSub = 0;
    let subStr = new Set();
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (subStr.has(s[right])) {
            subStr.delete(s[left]);
            left++;
        }
        subStr.add(s[right]);
        lenOfSub = Math.max(lenOfSub, right - left + 1);
    }
    
    return lenOfSub;
};

/* const s1 = "abcabcbb";
console.log(lengthOfLongestSubstring(s1));

const s2 = "bbbbb";
console.log(lengthOfLongestSubstring(s2)); */

const s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s3));

/* const s4 = "dvdf"
console.log(lengthOfLongestSubstring(s4));

const s5 = "anviaj"
console.log(lengthOfLongestSubstring(s5)) */