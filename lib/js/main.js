const boxes = document.querySelectorAll(".boxes");

class TicTacBox {
    constructor(div, index){ //takes a div that represents the tictactoe box, and a number between 0 and 8 representing where it is on the board
        this.div = div;
        this.index = index;
    }


}

class TicTacBoard {
    constructor(ticTacs) { //takes an array length of 9 that contains TicTacBox objects
        this.ticTacs = ticTacs;
        this.color = "blue";
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
            });
        }
    }

    colorSwitch () { //switches the color between blue and red
        if(this.color === "blue") {
            this.color = "red";
        } else {
            this.color = "blue";
        }
    }

    reset () {

    }
}

let boxArray = [];
for(let i = 0; i < boxes.length; i++) {
    boxArray[i] = new TicTacBox(boxes[i], i);
}
let board = new TicTacBoard(boxArray);