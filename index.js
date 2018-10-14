const ckWholeNum = num => {
     if (num % 1 === 0) {
        return num;
     }

     return num - (num % 1)
}

const getWholeNum = num => Math.floor(num);
const getWholeNum = num => {
    return Math.floor(num);
}

console.log(ckWholeNum(1.1111))

// Suppose num = 5...
// num = num + 1 // gives us 6
// num += 1 // ALSO gives us 6
// num -= 1 // gives us 4
// num *= 1 // 5
