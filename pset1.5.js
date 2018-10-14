function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
/*
    @func rockPaperScissors
    @param {string} player1
    @param {string} player2
    @returns {number}
    @desc - given a player1 and player2
            returns 1 if player1 has won
            returns 2 if player2 has won
            returns 0 if tie
            returns -1 if invalid input
            expects both player1 and player2 inputs to be either
            "rock", "paper", or "scissors"
    
    @example rockPaperScissors( "rock", "paper" ); // 2
    @example rockPaperScissors( "rock", "scissors"); // 1
    @example rockPaperScissors( "rock", "rock" ); // 0
    @example rockPaperScissors( "r", "p" ); // -1
    @example rockPaperScissors( "r" ); // -1
    @example rockPaperScissors(); // -1
*/

const required = () => {
    throw new Error('required!')
}

const rockPaperScissors = (p1 = required(), p2 = required()) => {
    p1 = p1.toLowerCase().slice(0,1);
    p2 = p2.toLowerCase().slice(0,1);

    if (p1 === p2) {
        return 0;
    }


    if ((p1 === "r" && p2 === "s") ||
        (p1 === "p" && p2 === "r") ||
        (p1 === "s" && p2 === "p")) {

        return 1;
    }

    return 2;

}

console.log( rockPaperScissors( "ROQ", "PAPIER" ), 2)
console.log( rockPaperScissors( "rock", "scissors"), 1)
console.log( rockPaperScissors( "rock", "rock" ), 0)
//console.log( rockPaperScissors( "r", "p" ), -1)
//console.log( rockPaperScissors( "r" ), -1)
try {
    console.log( rockPaperScissors(), -1)
} catch(e) {
    console.log('something went wrong!')
    console.log(e)
}

/*
    @func RPSwithComputer
    @param {string} player
    @returns {number}
    @desc - given a player,
            randomly selects a "choice" for the computer
            RUNS rockPaperScissors from before with computer's choice
            as `player2`
            expect same results as above
    @example rockPaperScissors( "rock" ); // 2, if computer won
    @example rockPaperScissors( "rock" ); // 1, if player won
    @example rockPaperScissors( "rock" ); // 0, if tied
    @example rockPaperScissors(); // -1
*/
const getComputerChoice = () => {
    const computerChoice = generateRandomNumberFromRange(1,3);
    if (computerChoice === 1) {
        return 'r';
    }
    if (computerChoice === 2) {
        return 'p';
    }

    return 's';
}

const RPSwithComputer = player => {
    console.log('player choice is...', player)
    return rockPaperScissors(player, getComputerChoice());
}

console.log('-----------------------')
console.log(RPSwithComputer('testing'))
console.log(RPSwithComputer( "rock" ))
console.log(RPSwithComputer( "rock" ))

/*

const RPSwithComputer = player => {
    console.log('player choice is...', player)
    const compChoice = generateRandomNumberFromRange(1,3);

    if (compChoice === 1) {
        return rockPaperScissors(player, 'r');
    }

    if (compChoice === 2) {
        return rockPaperScissors(player, 'p');
    }

    if (compChoice === 3) {
        return rockPaperScissors(player, 's');
    }
}
*/
