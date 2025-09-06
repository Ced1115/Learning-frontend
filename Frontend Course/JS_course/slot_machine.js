// 1. Deposit some money 
// 2. Determine nb of line to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if usr won
// 6. give/take the user their money
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 16,
    D : 24
};

const SYMBOLS_VALUES = {
    A : 5,
    B : 4,
    C : 3,
    D : 2
};


const deposit = () => {
    while (true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid input, please try again!");
        } else {
            return numberDepositAmount;
        }
    }
    
};

const getNbOfLine = () => {
    while (true){
        const lineAmount = prompt("Enter a number of line to bet on amount (1-3): ");
        const numberLineAmount = parseFloat(lineAmount);
    
        if (isNaN(numberLineAmount) || numberLineAmount <= 0 || numberLineAmount > 3) {
            console.log("Invalid input, please try again!");
        } else {
            return numberLineAmount;
        }
    }
    
};

const getBetAmount = (balance, rows) => {
    while (true){
        const bet = prompt("Enter a bet amount : ");
        const betAmount = parseFloat(bet);
    
        if (isNaN(betAmount)) {
            console.log("Invalid input, please try again!");
        } else if (betAmount <= 0 || betAmount > balance / rows) {
            console.log("The bet must be inside the balance of the user")
        }else {
            return betAmount;
        }
    }
    
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    
    const reels = [];
    for (let i = 0; i < COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1)
        }
    }

    return reels
};

const transpose = (reels) => {
    const rows = [];
    for (i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i])
        }
    }

    return rows;
};

const printRows = (rows) => {
    for(const row of rows){
        let rowString = "";
        for(const [i, symbol] of row.entries()){
            rowString += symbol
            if (i != row.length -1){
                rowString += " | "
            }
        }
        console.log(rowString)
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    
    for (let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for(const symbol of symbols) {
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOLS_VALUES[symbols[0]];
        }
    }

    return winnings;
}

const game = () => {
    let balance = deposit();
    
    while (true) {
        console.log("You have a balance of " + balance + "$")
        const lines = getNbOfLine();
        const bet = getBetAmount(balance, lines);
        balance -= bet * lines;

        const reels = spin();
        const rows = transpose(reels);

        printRows(rows);

        const winnings = getWinnings(rows, bet, lines);
        console.log("You won, " + winnings.toString() + "$");
        balance += winnings

        if (balance <= 0){
            console.log("You ran out of money!");
            break;
        }
        let wantToPlayAgain = false
        while(!wantToPlayAgain){
            const playAgain = prompt("Do you want to try your luck again? (Y/n): ")
            if (playAgain.toLowerCase() === "n"){
                break;
            }else if (playAgain.toLowerCase() === "y"){
                wantToPlayAgain = true
            }
        }
        if(!wantToPlayAgain){
            break;
        }
      
    }
    
}

game();


