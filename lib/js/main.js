

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
            this.ticTacs[i].addEventListener("click", (e) => {
                e.preventDefault();
                e.target.style.backgroundColor = this.color;
                this.colorSwitch();
            });
        }
    }

    colorSwitch () {
        if(this.color === "blue") {
            this.color = "red";
        } else {
            this.color = "blue";
        }
    }
}