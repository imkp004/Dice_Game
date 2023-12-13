let images = ["dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"];

let player1Dice = document.querySelectorAll("#player1 img");
let player2Dice = document.querySelectorAll("#player2 img");
let player1NameInput = document.getElementById("player1Name");
let player2NameInput = document.getElementById("player2Name");

function roll() {
    player1Dice.forEach(function (die) {
        die.classList.add("shake");
    });

    player2Dice.forEach(function (die) {
        die.classList.add("shake");
    });

    setTimeout(function () {
        player1Dice.forEach(function (die) {
            die.classList.remove("shake");
        });

        player2Dice.forEach(function (die) {
            die.classList.remove("shake");
        });

        let die1Player1 = Math.floor(Math.random() * 6);
        let die2Player1 = Math.floor(Math.random() * 6);
        let die1Player2 = Math.floor(Math.random() * 6);
        let die2Player2 = Math.floor(Math.random() * 6);

        player1Dice[0].setAttribute("src", images[die1Player1]);
        player1Dice[1].setAttribute("src", images[die2Player1]);
        player2Dice[0].setAttribute("src", images[die1Player2]);
        player2Dice[1].setAttribute("src", images[die2Player2]);

        let totalPlayer1 = (die1Player1 + 1) + (die2Player1 + 1);
        let totalPlayer2 = (die1Player2 + 1) + (die2Player2 + 1);

        let result = "";

        if (totalPlayer1 > totalPlayer2) {
            result = `${player1NameInput.value || "Player 1"} wins!`;
        } else if (totalPlayer1 < totalPlayer2) {
            result = `${player2NameInput.value || "Player 2"} wins!`;
        } else {
            result = "It's a tie!";
        }

        document.querySelector("#result").innerHTML = result;
    },
        1000
    );
}
