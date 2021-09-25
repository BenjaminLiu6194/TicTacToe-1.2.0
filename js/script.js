let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];
let currentPlayer = "X";

function drawBoard(){
    for (let row = 0; row < board.length; row ++) {
        const rowArray = board[row]
        for (let col = 0; col < rowArray.length; col ++) {
            console.log(row + " " + col + " " + rowArray[col])
            $(`button[data-row='${row}'][data-col='${col}']`).html(rowArray[col])
        }
    }

}

function checkForWinner() {
    let winningString = currentPlayer + currentPlayer + currentPlayer;
    ///check all the rows
    for (let row = 0; row < board.length; row ++) {
        const rowArray = board[row]
        if (rowArray.join("") === winningString) {
            return true;
        }
    }
    // check columns
    for (let col = 0; col < board.length; col ++) {

        if (board[0][col] === currentPlayer &&
            board[1][col] === currentPlayer &&
            board[2][col] === currentPlayer ) {
            return true;
        }
    }

    //check diagonals
    if (board[0][2] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer ) {
        return true;
    }
    if (board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][0] === currentPlayer ) {
        return true;
    }

    return false;
}

drawBoard();


$("button").click((event) => {
    const buttonThatWasClicked = event.target;
    const row = parseInt($(buttonThatWasClicked).attr("data-row"));
    const col = parseInt($(buttonThatWasClicked).attr("data-col"));

    if (board[row][col] !== " ") {
        return;
    }
    console.log(`Row: ${row}, Col: ${col}`)
    board[row][col] = currentPlayer
    drawBoard();
    
    setTimeout(function () {
        let winnerExists= checkForWinner();
        if (winnerExists) {
            alert (currentPlayer + " has won!");
        }
        if (currentPlayer == "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    }, 10)


});