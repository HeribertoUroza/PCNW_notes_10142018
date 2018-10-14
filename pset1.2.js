function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/
const generateRandomPhoneNumber = () => {
    const p1 = generateRandomNumberFromRange(100, 999)
    const p2 = generateRandomNumberFromRange(100, 999)
    const p3 = generateRandomNumberFromRange(1000, 9999)

    return `1-${p1}-${p2}-${p3}`;
}

// check to ensure function return string
console.log(generateRandomPhoneNumber());
console.log(generateRandomPhoneNumber());
console.log(generateRandomPhoneNumber());
console.log(generateRandomPhoneNumber());

const pad3 = num => {
    if (num < 10) {
        return "00" + num;
    }

    if (num < 100) {
        return "0" + num;
    }

    return num
}

const pad4 = num => {

    if (num < 10) {
        return "000" + num;
    }

    if (num < 100) {
        return "00" + num;
    }

    if (num < 1000) {
        return "0" + num;
    }

    return num
}

console.log('--------------')
console.log(pad3(1)) // 001
console.log(pad3(11)) // 011
console.log(pad3(111)) // 111
console.log('--------------')

console.log('--------------')
console.log(pad4(1)) // 0001
console.log(pad4(11)) // 0011
console.log(pad4(111)) // 0111
console.log('--------------')

const generateRandomPhoneNumber2 = () => {
    let p1 = pad3(generateRandomNumberFromRange(0, 999))
    let p2 = pad3(generateRandomNumberFromRange(0, 999))
    let p3 = pad4(generateRandomNumberFromRange(0, 9999))

    return `1-${p1}-${p2}-${p3}`;
}

console.log(generateRandomPhoneNumber2());
console.log(generateRandomPhoneNumber2());
console.log(generateRandomPhoneNumber2());
console.log(generateRandomPhoneNumber2());
