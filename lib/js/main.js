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
        this.color = "blue";
        this.parent = parent;
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
        } else {
            this.color = "blue";
        }
    }

    reset () {
        for(let i = 0; i < this.ticTacs.length; i++) {
            this.ticTacs[i].div.style.backgroundColor = "white";
            this.ticTacs[i].div.style.pointerEvents = "auto";
        }
        this.color = "blue";
    }
}

let boxArray = [];
for(let i = 0; i < boxes.length; i++) {
    boxArray[i] = new TicTacBox(boxes[i], i);
}
let board = new TicTacBoard(boxArray, main);