function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/
const generateRandomRGB = (colorName, colorValue) => {

    if (colorName === "r") {
        r = colorValue;
    }
    else {
        r = generateRandomNumberFromRange(0, 255)
    }

    if (typeof g === "undefined") {
        g = generateRandomNumberFromRange(0, 255);
    }
    if (typeof b === "undefined") {
        b = generateRandomNumberFromRange(0, 255);
    }
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(generateRandomRGB("r", 255))
