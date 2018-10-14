function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

/*
    @func generateTicketWithLetters
    @returns {string}
    @desc - geneartes a random lotto ticket with:
            A random number 0-9
            A random LOWERCASED LETTER a-z
            A random UPPERCASED LETTER A-Z
            A random number 0-30
            
            Present it as such: L [a-z] [A-Z]-[0-30]
            HINT: look up `String.fromCharCode()` on the Google
            
        @example generateLottoTicket(); // L g M-28
*/
// lol ascii: http://www.jimprice.com/ascii-0-127.gif
const generateRandomChar = (s, e) => {
    return String.fromCharCode(generateRandomNumberFromRange(s, e))
}

const generateUpperCase = () => generateRandomChar(65, 90);
const generateLowerCase = () => generateRandomChar(97, 122);

const generateTicketWithLetters = () => {
    let randomLetter = generateUpperCase();
    let randomLetter2 = generateLowerCase();
    return randomLetter+randomLetter2;
}

console.log(generateTicketWithLetters())

