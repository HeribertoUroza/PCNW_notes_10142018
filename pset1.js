function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

/*
    @func generateTrafficLight
    @returns {string}
    @desc - generates a random number from 1 to 3
            if 1, return 'red'
            if 2, return 'green',
            if 3, return 'blue'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'
*/
const generateTrafficLight = () => {
    const light = generateRandomNumberFromRange(1,3);

    if (light === 1) {
        return "red";
    }

    if (light === 2) {
        return "green";
    }

    return "blue";
}

console.log(generateTrafficLight()); // lol im a string

/*
const generateTrafficLight = () => {
    const light = generateRandomNumberFromRange(1,3);

    if (light === 1) {
        return "red";
    }
    // DONT put stuff in between
    // an if/else if/else statement
    else if (light === 2) {
        return "green";
    }
    else {
        return "blue";
    }
}
*/
