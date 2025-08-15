var firstUniqChar = function(s) {
    const count = {}
    for (char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    console.log(count)

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) return i
    }
    return -1;
}

console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar('aabb'))
// s = "leetcode" -> 0(l)
// s = "loveleetcode" -> 2(v)
// s = "aabb" -> -1 (null)