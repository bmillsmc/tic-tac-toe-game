const boxes = document.querySelectorAll(".boxes");
const main = document.querySelector("main");

class TicTacBox {
    constructor(div, index){ //takes a div that represents the tictactoe box, and a number between 0 and 8 representing where it is on the board
        this.div = div;
        this.index = index;
    }


}

class TicTacBoard {
    constructor(ticTacs, parent) { //takes an array length of 9 that contains TicTacBox objects and a parent which is the parent of the board
        this.ticTacs = ticTacs;
        this.winArray = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,3,7],
            [2,5,8]
        ];
        this.color = "blue";
        this.messageEl = document.createElement("p");
        this.messageEl.classList.add("message");
        this.messageEl.innerText = "Its Blue's turn.";
        this.messageEl.style.color = "blue";
        this.parent = parent;
        this.parent.appendChild(this.messageEl);
        for(let i = 0; i < this.ticTacs.length; i++) {
            this.ticTacs[i].div.style.backgroundColor = "white";
        }
        for(let i = 0; i < this.ticTacs.length; i++) {
            console.log(this.ticTacs[i].div);
            this.ticTacs[i].div.addEventListener("click", (e) => {
                e.preventDefault();
                console.dir(e);
                e.target.style.backgroundColor = this.color;
                console.log(this.color);
                this.colorSwitch();
                this.ticTacs[i].div.style.pointerEvents = "none";
                console.dir(ticTacs[i].div.style);
                this.checkWin();
                this.checkBoard();
            });
        }
        let button = document.createElement("a");
        button.innerText = "Reset";
        button.classList.add("reset-button");
        button.addEventListener("click", (e) => {
            e.preventDefault();
            this.reset();
        });
        parent.appendChild(button);
    }

    colorSwitch () { //switches the color between blue and red
        if(this.color === "blue") {
            this.color = "red";
            this.messageEl.innerText = "Its Red's turn."
            this.messageEl.style.color = "red";
        } else {
            this.color = "blue";
            this.messageEl.innerText = "Its Blue's turn."
            this.messageEl.style.color = "blue";
        }
    }

    reset () {
        for(let i = 0; i < this.ticTacs.length; i++) {
            this.ticTacs[i].div.style.backgroundColor = "white";
            this.ticTacs[i].div.style.pointerEvents = "auto";
        }
        this.color = "red";
        this.colorSwitch();
    }

    checkBoard() { //checks for a full board

    }

    checkWin () { //checks for a win
        for(let i = 0; i < this.winArray.length; i++) {
            console.log(this.ticTacs[this.winArray[i][0]].div.style.backgroundColor+ " " +this.winArray[i]);
            if(this.ticTacs[this.winArray[i][0]].div.style.backgroundColor === this.ticTacs[this.winArray[i][1]].div.style.backgroundColor && this.ticTacs[this.winArray[i][1]].div.style.backgroundColor === this.ticTacs[this.winArray[i][2]].div.style.backgroundColor && this.ticTacs[this.winArray[i][0]].div.style.backgroundColor !== "white") {
                this.color = this.ticTacs[this.winArray[i][0]].div.style.backgroundColor;
                this.indicateWin();
            }
        }
    }

    indicateWin() { //processes a win
        this.messageEl.innerText = this.color.toUpperCase()+" WINS!! Press Reset to play again.";
        this.messageEl.style.color = this.color;
        this.gameEnd();
    }

    gameEnd() { //makes it so you can't play the game anymore unless you hit the reset button
        for(let i = 0; i < this.ticTacs.length; i++) {
            this.ticTacs[i].div.style.pointerEvents = "none";
        }
    }
}

let boxArray = [];
for(let i = 0; i < boxes.length; i++) {
    boxArray[i] = new TicTacBox(boxes[i], i);
}
let board = new TicTacBoard(boxArray, main);