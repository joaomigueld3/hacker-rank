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

function firstUniqChar2(str) {
    const mapFreq = new Map()
    for (const item of str) {
        const count = mapFreq.get(item) || 0;
        mapFreq.set(item, count+1)
    }
    //console.log(mapFreq)

    for (let i = 0; i < str.length; i++) {
        if (mapFreq.get(str[i]) === 1) return i
    }

    return -1
}

const printFunction = (functionName) => {
console.log(functionName('leetcode'))
console.log(functionName('loveleetcode'))
console.log(functionName('aabb'))
}
printFunction(firstUniqChar2)

// s = "leetcode" -> 0(l)
// s = "loveleetcode" -> 2(v)
// s = "aabb" -> -1 (null)