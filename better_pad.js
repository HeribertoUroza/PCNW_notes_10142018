/*
    @func pad
    @param num {number}
    @param padStr {string}
    @desc - pads a number to the padStr value
            for example: pad(1, "0000") => "0001"
            for example: pad(11, "0000") => "0011"
            for example: pad(11, "000") => "011"
            for example: pad(1, "ffff") => "fff1"
            for example: pad(11, "###") => "#11"
    @return {string}
*/

const pad = (num, padStr) => {
    const numStr = num + "";
    const numLen = numStr.length;
    const padLen = padStr.length;
    const diff = padLen - numLen
    return padStr.slice(0, diff) + numStr;
}

console.log('------------')
console.log(pad(1, "0000"), "0001")
console.log(pad(11, "0000"), "0011")
console.log(pad(11, "000"), "011")
console.log(pad(1, "ffff"),  "fff1")
console.log(pad(11, "###"), "#11")
console.log('------------')

// padNum is a NUMBER, representing the LENGTH
// of the padStr
const padWithDecimals = (num, padNum) => {
    const dec = num * 10 ** (-1*padNum);
    const str = String(dec)
    return str.slice(2, 2 + padNum);
}

console.log('------------')
console.log(padWithDecimals(1, 4), "0001")
console.log(padWithDecimals(11, 4), "0011")
console.log(padWithDecimals(11, 3), "011")
console.log(padWithDecimals(1, 4),  "fff1")
console.log(padWithDecimals(11, 3), "#11")
console.log('------------')


