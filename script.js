const a3 = document.getElementById('a3');
const b3 = document.getElementById('b3');
const c3 = document.getElementById('c3');
const a2 = document.getElementById('a2');
const b2 = document.getElementById('b2');
const c2 = document.getElementById('c2');
const a1 = document.getElementById('a1');
const b1 = document.getElementById('b1');
const c1 = document.getElementById('c1');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

const playAgainPopUp = document.getElementById('play-again-pop-up');
const overlay = document.getElementById('overlay');


let aginstComputer = p1.classList.contains('active_toggle');
let lastComputerPlay;
let count = 0;
let isPlayersOneTurn = true;
let plays = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var i = 0;

function isPlayed(slot) {
    return slot.classList.contains('played');
}
function markAsPlayed(slot, symbol) {
    slot.classList.add("played")
    slot.classList.add(symbol)
}

function slotPlayedError(slot) {
}

function computersTurn(event) {
    function play(slot) {
        lastComputerPlay = slot;
        slot.innerHTML = `<img class="played" id="${slot.id}x" src= "assets/o.svg" >`;
        setTimeout(() => {
            document.getElementById(`${lastComputerPlay.id}x`).classList.toggle('final');
        }, 50);

        plays[i] = slot.id;
        markAsPlayed(slot,"o");
    }

    function defend() {
        function checkTriplet(a, b, c) {
            if (a.classList.contains("x") && b.classList.contains("x") && c.innerHTML == "") {
                play(c);
                return true;
            }
            else if (a.classList.contains("x") && c.classList.contains("x")&& b.innerHTML == "") {
                play(b);
                return true;
            }
            else {
                return false;
            }
        }

        x = plays[i - 1];

        if (x == "a3") {
            if (!checkTriplet(a3, b3, c3)) {
                if (!checkTriplet(a3, b2, c1)) {
                    checkTriplet(a3, a2, a1);
                }
            }
        }
        else if (x == "b3") {
            if (!checkTriplet(b3, a3, c3)) {
                checkTriplet(b3, b2, b1);
            }
        }
        else if (x == "c3") {
            if (!checkTriplet(c3, b3, a3)) {
                if (!checkTriplet(c3, c2, c1)) {
                    checkTriplet(c3, b2, a1)
                }
            }
        }
        else if (x == "a2") {
            if (!checkTriplet(a2, a3, a1)) {
                checkTriplet(a2, b2, c2);
            }
        }
        else if (x == "b2") {
            if (!checkTriplet(b2, b1, b3)) {
                if (!checkTriplet(b2, a2, c2)) {
                    if (!checkTriplet(b2, a3, c1)) {
                        checkTriplet(b2, c3, a1);
                    }
                }
            }
        }
        else if (x == "c2") {
            if (!checkTriplet(c2, c3, c1)) {
                checkTriplet(c2, b2, a2);
            }
        }
        else if (x == "a1") {
            if (!checkTriplet(a1, b1, c1)) {
                if (!checkTriplet(a1, b2, c3)) {
                    checkTriplet(a1, a2, a3);
                }
            }
        }
        else if (x == "b1") {
            if (!checkTriplet(b1, a1, c1)) {
                checkTriplet(b1, b2, b3);
            }
        }
        else if (x == "c1") {
            if (!checkTriplet(c1, b1, a1)) {
                if (!checkTriplet(c1, c2, c3)) {
                    checkTriplet(c1, b2, a3)
                }
            }
        }
    }
    function attack() {
        x = plays[i - 2];
        function checkTriplet(a, b, c) {
            if (a.classList.contains("o") && b.classList.contains("o") && c.innerHTML == "") {
                play(c);
                lost();
                return true;
            }
            else if (a.classList.contains("o") && c.classList.contains("o") && b.innerHTML == "") {
                play(b);
                lost();
                return true;
            }
            else {
                return false;
            }
        }


        if (x == "a3") {
            if (!checkTriplet(a3, b3, c3)) {
                if (!checkTriplet(a3, b2, c1)) {
                    if (!checkTriplet(a3, a2, a1)) {
                        return false
                    }
                }
            }
        }
        else if (x == "b3") {
            if (!checkTriplet(b3, a3, c3)) {
                if (!checkTriplet(b3, b2, b1))
                    return false
            }
        }
        else if (x == "c3") {
            if (!checkTriplet(c3, b3, a3)) {
                if (!checkTriplet(c3, c2, c1)) {
                    if (!checkTriplet(c3, b2, a1)) {
                        return false
                    }
                }
            }
        }
        else if (x == "a2") {
            if (!checkTriplet(a2, a3, a1)) {
                if (!checkTriplet(a2, b2, c2)) {
                    return false
                }
            }
        }
        else if (x == "b2") {
            if (!checkTriplet(b2, a3, c1)) {
                if (!checkTriplet(b2, c3, a1)) {
                    if (!checkTriplet(b2, b1, b3)) {
                        if (!checkTriplet(b2, a2, c2)) {
                            return false
                        }
                    }
                }
            }
        }
        else if (x == "c2") {
            if (!checkTriplet(c2, c3, c1)) {
                if (!checkTriplet(c2, b2, a2)) {
                    return false
                }
            }
        }
        else if (x == "a1") {
            if (!checkTriplet(a1, b1, c1)) {
                if (!checkTriplet(a1, b2, c3)) {
                    if (!checkTriplet(a1, a2, a3)) {
                        return false
                    }
                }
            }
        }
        else if (x == "b1") {
            if (!checkTriplet(b1, a1, c1)) {
                if (!checkTriplet(b1, b2, b3)) {
                    return false
                }
            }
        }
        else if (x == "c1") {
            if (!checkTriplet(c1, b1, a1)) {
                if (!checkTriplet(c1, c2, c3)) {
                    if (!checkTriplet(c1, b2, a3)) {
                        return false
                    }
                }
            }
        }
        return true;
    }
    function playAny() {
        if (a3.innerHTML == "") {
            play(a3)
        }
        else if (b3.innerHTML == "") {
            play(b3)
        }
        else if (c3.innerHTML == "") {
            play(c3)
        }
        else if (a2.innerHTML == "") {
            play(a2)
        }
        else if (b2.innerHTML == "") {
            play(b2)
        }
        else if (c2.innerHTML == "") {
            play(c2)
        }
        else if (a1.innerHTML == "") {
            play(a1)
        }
        else if (b1.innerHTML == "") {
            play(b1)
        }
        else {
            play(c1)
        }
    }
    plays[i] = event.target.id;
    i += 1;
    switch (count) {
        case 1:
            // center
            if (plays[0] == "b2") {
                play(a3);
            }
            // !center
            else {
                play(b2);
            }
            break;
        case 3:
            // center
            if (plays[0] == "b2") {
                if (plays[2] == "c1") {
                    play(a1)
                }
                else {
                    defend()
                }
            }
            // close sides
            // top side and right side
            else if (plays[0] == "b3" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "b3") {
                play(c3)
            }
            // top side and left side
            else if (plays[0] == "b3" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "b3") {
                play(a3)
            }
            // bottom side and right side
            else if (plays[0] == "b1" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "b1") {
                play(c1)
            }
            // bottom side and left side
            else if (plays[0] == "b1" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "b1") {
                play(a1)
            }
            // opposite side 
            else if (plays[0] == "b3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "b3" || plays[0] == "a2" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a2") {
                play(a3)
            }
            // opposite corners
            else if (plays[0] == "a3" && plays[2] == "c1" || plays[0] == "c1" && plays[2] == "a3" || plays[0] == "c3" && plays[2] == "a1" || plays[0] == "a1" && plays[2] == "c3") {

                play(b3);
            }
            // corner and far side
            // top left corner and right side
            // top right corner and left side
            else if (plays[0] == "a3" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a3" || plays[0] == "c3" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "c3") {
                play(b3)
            }
            // top right corner and bottom side
            // bottom right corner and top side
            else if (plays[0] == "c3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "c3" || plays[0] == "c1" && plays[2] == "b3" || plays[0] == "b3" && plays[2] == "c1") {
                play(c2)
            }

            // bottom left corner and right side 
            // bottom right corner and left side
            else if (plays[0] == "a1" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a1" || plays[0] == "c1" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "c1") {
                play(b1)
            }
            // bottom left corner and top side
            // top left corner and bottom side
            else if (plays[0] == "a1" && plays[2] == "b3" || plays[0] == "b3" && plays[2] == "a1" || plays[0] == "a3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "a3") {
                play(a2)
            }
            // corner and close corner
            // corner and close side
            else {
                defend();
            }
            break;
        case 5:
            // center
            if (plays[0] == "b2" && plays[2] == "a1") {
                if (!isPlayed(b3)) {
                    play(b3);
                    lost()
                }
                else {
                    defend()
                }
            }
            else if (plays[0] == "b2" && plays[2] == "c3") {
                if (!isPlayed(a2)) {
                    play(a2);
                    lost()
                }
                else {
                    defend()
                }
            }
            else if (plays[0] == "b2" && plays[2] == "b1" && !isPlayed(c3)) {
                play(c3);
                lost()
            }
            else if (plays[0] == "b2" && plays[2] == "c2" && !isPlayed(a1)) {
                play(a1);
                lost()
            }
            // close sides
            // bottom side and left side
            else if (plays[0] == "b1" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "b1") {
                if (!isPlayed(c3)) {
                    play(c3);
                    lost()
                }
                else {
                    play(a3)
                }
            }
            // top side and right side
            else if (plays[0] == "b3" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "b3") {
                if (!isPlayed(a1)) {
                    play(a1);
                    lost()
                }
                else {
                    play(a3)
                }
            }
            // top side and left side
            else if (plays[0] == "b3" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "b3") {
                if (!isPlayed(c1)) {
                    play(c1);
                    lost()
                }
                else {
                    play(c3)
                }
            }
            // bottom side and right side
            else if (plays[0] == "b1" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "b1") {
                if (!isPlayed(a3)) {
                    play(a3);
                    lost()
                }
                else {
                    play(c3)
                }
            }
            // oppostie sides
            // top side and bottom side
            else if (plays[0] == "b3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "b3") {
                if (!isPlayed(c1)) {
                    play(c1);
                    lost()
                }
                else {
                    play(a1)
                }
            }
            // right side and left side
            else if (plays[0] == "a2" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a2") {
                if (!isPlayed(c1)) {
                    play(c1);
                    lost()
                }
                else {
                    play(c3)
                }
            }
            // corner and far corner
            else if (plays[0] == "a3" && plays[2] == "c1" || plays[0] == "c1" && plays[2] == "a3") {
                if (!isPlayed(b1)) {
                    play(b1);
                    lost()
                }
                else {
                    play(a1);
                }
            }
            else if (plays[0] == "c3" && plays[2] == "a1" || plays[0] == "a1" && plays[2] == "c3") {
                if (!isPlayed(b1)) {
                    play(b1)
                    lost()
                }
                else {
                    play(c1)
                }
            }
            // corner and far side
            // top left corner and right side
            // top right corner and left side
            else if (plays[0] == "a3" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a3" || plays[0] == "c3" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "c3") {
                if (!isPlayed(b1)) {
                    play(b1);
                    lost()
                }
                else {
                    if (isPlayed(a3)) {
                        play(a1)
                    }
                    else {
                        play(c1)
                    }
                }
            }
            // top left corner and bottom side
            // bottom left corner and top side
            else if (plays[0] == "a3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "a3" || plays[0] == "a1" && plays[2] == "b3" || plays[0] == "b3" && plays[2] == "a1") {
                if (!isPlayed(c2)) {
                    play(c2);
                    lost()
                }
                else {
                    if (isPlayed(a1)) {
                        play(c1)
                    }
                    else {
                        play(c3)
                    }
                }
            }
            // bottom left corner and right side
            // bottom right corner and left side
            else if (plays[0] == "a1" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a1" || plays[0] == "c1" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "c1") {
                if (!isPlayed(b3)) {
                    play(b3);
                    lost()
                }
                else {
                    if (isPlayed(a1)) {
                        play(a3)
                    }
                    else {
                        play(c3)
                    }
                }
            }
            // top right corner and bottom side
            // bottom right corner and top side
            else if (plays[0] == "c3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "c3" || plays[0] == "c1" && plays[2] == "b3" || plays[0] == "b3" && plays[2] == "c1") {
                if (!isPlayed(a2)) {
                    play(a2);
                    lost()
                }
                else {
                    if (isPlayed(c3)) {
                        play(a3)
                    }
                    else {
                        play(a1)
                    }
                }
            }
            // corner and close corner
            // top corners
            else if (plays[0] == "a3" && plays[2] == "c3" || plays[0] == "c3" && plays[2] == "a3") {
                if (!isPlayed(b1)) {
                    play(b1);
                    lost()
                }
                else {
                    play(a2)
                }
            }
            // bottom corners
            else if (plays[0] == "a1" && plays[2] == "c1" || plays[0] == "c1" && plays[2] == "a1") {
                if (!isPlayed(b3)) {
                    play(b3);
                    lost()
                }
                else {
                    play(a2)
                }
            }
            // left corners
            else if (plays[0] == "a3" && plays[2] == "a1" || plays[0] == "a1" && plays[2] == "a3") {
                if (!isPlayed(c2)) {
                    play(c2);
                    lost()
                }
                else {
                    play(b1)
                }
            }
            // right corners
            else if (plays[0] == "c3" && plays[2] == "c1" || plays[0] == "c1" && plays[2] == "c3") {
                if (!isPlayed(a2)) {
                    play(a2);
                    lost()
                }
                else {
                    play(b1)
                }
            }
            // corner and close side
            else {
                if (!attack()) {
                    defend();
                }
            }

            break;
        case 7:
            // center
            if (plays[0] == "b2" && plays[2] == "b1" && plays[4] == "c3" && !isPlayed(a2)) {
                play(a2);
                lost()
            }
            else if (plays[0] == "b2" && plays[2] == "c2" && plays[4] == "a1" && !isPlayed(b3)) {
                play(b3);
                lost()
            }
            // close sides
            // top side and left side
            // bottom side and right side
            else if (plays[0] == "b3" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "b3" || plays[0] == "b1" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "b1") {
                if (!isPlayed(a1)) {
                    play(a1);
                    lost()
                }
                else {
                    defend()
                }
            }
            // top side and right side
            // bottom side and left side
            else if (plays[0] == "b1" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "b1" || plays[0] == "b3" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "b3") {
                if (!isPlayed(c1)) {
                    play(c1);
                    lost()
                }
                else {
                    defend()
                }
            }
            // opposite side
            // top side and bottom side
            else if (plays[0] == "b3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "b3") {
                if (!isPlayed(a2)) {
                    play(a2);
                    lost()
                }
                else {
                    play(c2);
                    lost()
                }
            }
            // right side and left side
            else if (plays[0] == "a2" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a2") {
                if (!isPlayed(b3)) {
                    play(b3);
                    lost()
                }
                else {
                    play(a1);
                    lost()
                }
            }
            // corner and far corner
            else if (plays[0] == "a3" && plays[2] == "c1" || plays[0] == "c1" && plays[2] == "a3") {
                if (!isPlayed(c3)) {
                    play(c3)
                    lost()
                }
                else {
                    play(c2);
                }

            }
            else if (plays[0] == "c3" && plays[2] == "a1" || plays[0] == "a1" && plays[2] == "c3") {
                if (!isPlayed(a3)) {
                    play(a3);
                    lost()
                }
                else {
                    play(a2);
                }
            }
            // corner and close corner
            else if (plays[0] == "a3" && plays[2] == "c3" || plays[0] == "c3" && plays[2] == "a3" || plays[0] == "a1" && plays[2] == "c1" || plays[0] == "c1" && plays[2] == "a1" || plays[0] == "a3" && plays[2] == "a1" || plays[0] == "a1" && plays[2] == "a3" || plays[0] == "c3" && plays[2] == "c1" || plays[0] == "c1" && plays[2] == "c3") {
                defend()
            }
            // corner and far side
            // top left corner and right side
            // bottom right corner and top side
            else if (plays[0] == "a3" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a3" || plays[0] == "c1" && plays[2] == "b3" || plays[0] == "b3" && plays[2] == "c1") {
                if (!isPlayed(c3)) {
                    play(c3);
                    lost()
                }
                else {
                    defend()
                }
            }
            // top right corner and left side
            // bottom left corner and top side
            else if (plays[0] == "c3" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "c3" || plays[0] == "a1" && plays[2] == "b3" || plays[0] == "b3" && plays[2] == "a1") {
                if (!isPlayed(a3)) {
                    play(a3);
                    lost()
                }
                else {
                    defend()
                }
            }
            // top left corner and bottom side
            // bottom right corner and left side
            else if (plays[0] == "a3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "a3" || plays[0] == "c1" && plays[2] == "a2" || plays[0] == "a2" && plays[2] == "c1") {
                if (!isPlayed(a1)) {
                    play(a1);
                    lost()
                }
                else {
                    defend()
                }
            }
            // top right corner and bottom side
            // bottom left corner and right side
            else if (plays[0] == "c3" && plays[2] == "b1" || plays[0] == "b1" && plays[2] == "c3" || plays[0] == "a1" && plays[2] == "c2" || plays[0] == "c2" && plays[2] == "a1") {
                if (!isPlayed(c1)) {
                    play(c1);
                    lost()
                }
                else {
                    defend()
                }
            }
            // corner and close side
            else {
                if (!attack()) {
                    playAny();
                }
            }
    }
    i += 1;
    count += 1;
    

}

function playAgain() {
    playAgainPopUp.classList.add('active');
    overlay.classList.add('active');
}

function won() {
    if (isPlayersOneTurn) {
        document.getElementById('result').innerHTML = "PLAYER ONE WON";
    }
    else {
        document.getElementById('result').innerHTML = "PLAYER TWO WON";
    }
    playAgain();
}
function draw() {
    document.getElementById('result').innerHTML = "DRAW";
    playAgain();
}
function lost() {
    document.getElementById('result').innerHTML = "YOU LOST";
    setTimeout(playAgain, 500);
    ;
}



function didWin(place, x) {
    /*winning checks*/
    function threeIn1(x) {
        if (a1.classList.contains(x) && b1.classList.contains(x) && c1.classList.contains(x) ) {
            return true
        }
    }
    function threeIn2(x) {
        if (a2.classList.contains(x) && b2.classList.contains(x) && c2.classList.contains(x) ) {
            return true
        }
    }
    function threeIn3(x) {
        if (a3.classList.contains(x) && b3.classList.contains(x) && c3.classList.contains(x) ) {
            return true
        }
    }
    function threeInA(x) {
        if (a1.classList.contains(x) && a2.classList.contains(x) && a3.classList.contains(x) ) {
            return true
        }
    }
    function threeInB(x) {
        if (b1.classList.contains(x) && b2.classList.contains(x) && b3.classList.contains(x) ) {
            return true
        }
    }
    function threeInC(x) {
        if (c1.classList.contains(x) && c2.classList.contains(x) && c3.classList.contains(x) ) {
            return true
        }
    }
    function threeDiagonallyDown(x) {
        if (a3.classList.contains(x) && b2.classList.contains(x) && c1.classList.contains(x) ) {
            return true
        }
    }
    function threeDiagnoallyUp(x) {
        if (a1.classList.contains(x) && b2.classList.contains(x) && c3.classList.contains(x) ) {
            return true
        }
    }

    if (place == a1) {
        if (threeIn1(x)) {
            return true
        }
        else if (threeInA(x)) {
            return true
        }
        else if (threeDiagnoallyUp(x)) {
            return true
        }
        else {
            return false
        }
    }
    else if (place == b1) {
        if (threeIn1(x)) {
            return true
        }
        else if (threeInB(x)) {
            return true
        }
        else {
            return false
        }
    }
    else if (place == c1) {
        if (threeIn1(x)) {
            return true
        }
        else if (threeInC(x)) {
            return true
        }
        else if (threeDiagonallyDown(x)) {
            return true
        }
        else {
            return false
        }
    }
    else if (place == a2) {
        if (threeIn2(x)) {
            return true
        }
        else if (threeInA(x)) {
            return true
        }
        else {
            return false
        }
    }
    else if (place == b2) {
        if (threeIn2(x)) {
            return true
        }
        else if (threeInB(x)) {
            return true
        }
        else if (threeDiagonallyDown(x)) {
            return true
        }
        else if (threeDiagnoallyUp(x)) {
            return true
        }
        else {
            return false
        }
    }
    else if (place == c2) {
        if (threeIn2(x)) {
            return true
        }
        else if (threeInC(x)) {
            return true
        }
        else {
            return false
        }
    }
    else if (place == a3) {
        if (threeIn3(x)) {
            return true
        }
        else if (threeInA(x)) {
            return true
        }
        else if (threeDiagonallyDown(x)) {
            return true
        }
        else {
            return false
        }
    }
    else if (place == b3) {
        if (threeIn3(x)) {
            return true
        }
        else if (threeInB(x)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        if (threeIn3(x)) {
            return true
        }
        else if (threeInC(x)) {
            return true
        }
        else if (threeDiagnoallyUp(x)) {
            return true
        }
        else {
            return false
        }
    }

}

function usersTurn(event) {
    if (!isPlayed(event.target)) {
        let idimg = `${event.target.id}x`;
        if (isPlayersOneTurn) {
            var symbol = "x"
        }
        else {
            var symbol = "o";
        }

        event.target.innerHTML = `<img class="played" id="${idimg}" src="assets/${symbol}.svg">`;
        setTimeout(() => {
            document.getElementById(idimg).classList.toggle('final');
        }, 0);
        markAsPlayed(event.target,symbol);
        count += 1;
        if (count > 4) {
            if (didWin(event.target,symbol)) {
                won();
            }
            else if (count == 9) {
                draw()
            }
        }
        if (isPlayersOneTurn) {
            if (aginstComputer) {
                computersTurn(event)
            }
            else {
                isPlayersOneTurn = false
            }
        }
        else {
            isPlayersOneTurn = true
        }
    }
}



document.getElementById('a3').addEventListener('click', usersTurn);
document.getElementById('b3').addEventListener('click', usersTurn);
document.getElementById('c3').addEventListener('click', usersTurn);
document.getElementById('a2').addEventListener('click', usersTurn);
document.getElementById('b2').addEventListener('click', usersTurn);
document.getElementById('c2').addEventListener('click', usersTurn);
document.getElementById('a1').addEventListener('click', usersTurn);
document.getElementById('b1').addEventListener('click', usersTurn);
document.getElementById('c1').addEventListener('click', usersTurn);


function toggle() {
    p1.classList.toggle('inactive_toggle');
    p1.classList.toggle('active_toggle');
    p2.classList.toggle('active_toggle');
    p2.classList.toggle('inactive_toggle');
    aginstComputer = p1.classList.contains('active_toggle')
}


function resetGame() {
    function reset(x) {
        x.innerHTML = "";
        x.setAttribute('class', "place")
    }

    reset(a3);
    reset(b3);
    reset(c3);
    reset(a2);
    reset(b2);
    reset(c2);
    reset(a1);
    reset(b1);
    reset(c1);
    isPlayersOneTurn = true;
    count = 0;
    plays = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    i = 0;
}
p1.addEventListener('click', () => {
    if (p1.classList.contains('inactive_toggle')) {
        toggle();
        resetGame();
    }

})
p2.addEventListener('click', () => {
    if (p2.classList.contains('inactive_toggle')) {
        toggle();
        resetGame();
    }
})

document.getElementById('play_again').addEventListener('click', () => {
    if (playAgainPopUp.classList.contains('active')) {
        playAgainPopUp.classList.remove('active');
        overlay.classList.remove('active');
        resetGame();
    }
})
