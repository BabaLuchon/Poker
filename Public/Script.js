//Etape 1 : création du deck
const couleur = ["p", "ca", "t", "c"];
const nombre = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "D", "R"];

function deck() {
    carte = []; // tableau qui contient le deck
    inc = 0
    for (i = 0; i < 13; i++) { //cherche les nombres
        for (x = 0; x < 4; x++) { //cherche les couleurs
            carte[inc] = nombre[i] + couleur[x];
            inc++
        }
    }
    console.log(carte);
}

deck()

// Etape 2 mélanger les cartes

function shuffle() {
    for (i = 0; i < 52; i++) {
        r = Math.floor(Math.random() * 51) // J'echange chaque carte dans le deck avec une carte au hasard
        save = carte[r];
        carte[r] = carte[i];
        carte[i] = save;
    }
    console.log(carte);
}

shuffle()

// Etape 3 distribution

let D = document.querySelector('.D')
J1 = [];
J2 = [];
J3 = [];
J4 = [];
J5 = [];
riv = [];
t = 0;
u = 0;
o = 0;

D.addEventListener("click", function dist() {
    if (u == 0) {
        if (t + 18 > 51) {
            t = 0;
            console.log('Deck vide, melange des cartes')
            shuffle()
            dist()
            u = 0;
        } else {
            for (i = 0; i < 2; i++) {
                J1[i] = carte[t];
                J2[i] = carte[t + 1];
                J3[i] = carte[t + 2];
                J4[i] = carte[t + 3];
                J5[i] = carte[t + 4];
                t += 5;

            }
            o = 1;
            //Etape 4 riviere
            t++; //brûlage de carte
            for (i = 1; i < 4; i++) {
                riv[i - 1] = carte[t];
                document.querySelector('.ri' + i).src = "Public/cards/" + riv[i - 1] + ".png";
                t++;
            }
            for (j = 3; j < 5; j++) {
                t++; //brûlage de carte
                riv[j] = carte[t];
                t++;
            }
            console.log(riv)
            console.log(J1, J2, J3, J4, J5);
        }
        u++;
    } else if (u == 1) {
        document.querySelector('.burn1').style.visibility = "visible";
        u++;
    } else if (u == 2) {
        document.querySelector('.ri4').src = "Public/cards/" + riv[3] + ".png";
        document.querySelector('.ri4').style.visibility = "visible";
        u++;
    } else if (u == 3) {
        document.querySelector('.burn2').style.visibility = "visible";
        u++;
    } else if (u == 4) {
        document.querySelector('.ri5').src = "Public/cards/" + riv[4] + ".png";
        document.querySelector('.ri5').style.visibility = "visible";
        u++;
    } else if (u == 5) {
        document.querySelector('.J1a').src = "Public/cards/" + J1[0] + ".png";
        document.querySelector('.J1b').src = "Public/cards/" + J1[1] + ".png";
        document.querySelector('.J2a').src = "Public/cards/" + J2[0] + ".png";
        document.querySelector('.J2b').src = "Public/cards/" + J2[1] + ".png";
        document.querySelector('.J3a').src = "Public/cards/" + J3[0] + ".png";
        document.querySelector('.J3b').src = "Public/cards/" + J3[1] + ".png";
        document.querySelector('.J4a').src = "Public/cards/" + J4[0] + ".png";
        document.querySelector('.J4b').src = "Public/cards/" + J4[1] + ".png";
        document.querySelector('.J5a').src = "Public/cards/" + J5[0] + ".png";
        document.querySelector('.J5b').src = "Public/cards/" + J5[1] + ".png";
        u++
    } else if (u == 6) {
        document.querySelector('.J1a').src = "Public/cards/back_card.png";
        document.querySelector('.J1b').src = "Public/cards/back_card.png";
        document.querySelector('.J2a').src = "Public/cards/back_card.png";
        document.querySelector('.J2b').src = "Public/cards/back_card.png";
        document.querySelector('.J3a').src = "Public/cards/back_card.png";
        document.querySelector('.J3b').src = "Public/cards/back_card.png";
        document.querySelector('.J4a').src = "Public/cards/back_card.png";
        document.querySelector('.J4b').src = "Public/cards/back_card.png";
        document.querySelector('.J5a').src = "Public/cards/back_card.png";
        document.querySelector('.J5b').src = "Public/cards/back_card.png";

        for (i = 1; i < 4; i++) {
            document.querySelector('.ri' + i).src = "Public/cards/back_card.png";
        }
        document.querySelector('.ri4').style.visibility = "hidden";
        document.querySelector('.ri5').style.visibility = "hidden";
        document.querySelector('.burn1').style.visibility = "hidden";
        document.querySelector('.burn2').style.visibility = "hidden";
        tj1 = 0;
        tj2 = 0;
        tj3 = 0;
        tj4 = 0;
        tj5 = 0;
        o = 0;
        u = 0;
    } else {
        console.log('erreur')
        u = 0;
    }
    console.log(u);
})

// tourner les cartes

let Z1 = document.querySelector(".Z1");
let Z2 = document.querySelector(".Z2");
let Z3 = document.querySelector(".Z3");
let Z4 = document.querySelector(".Z4");
let Z5 = document.querySelector(".Z5");

tj1 = 0;
tj2 = 0;
tj3 = 0;
tj4 = 0;
tj5 = 0;


Z1.addEventListener("click", function () {
    if (tj1 == 0 && tj2 == 0 && tj3 == 0 && tj4 == 0 && tj5 == 0 && o == 1) {
        document.querySelector('.J1a').src = "Public/cards/" + J1[0] + ".png";
        document.querySelector('.J1b').src = "Public/cards/" + J1[1] + ".png";
        tj1 = 1;
    } else {
        document.querySelector('.J1a').src = "Public/cards/back_card.png";
        document.querySelector('.J1b').src = "Public/cards/back_card.png";
        tj1 = 0;
    }
})
Z2.addEventListener("click", function () {
    if (tj1 == 0 && tj2 == 0 && tj3 == 0 && tj4 == 0 && tj5 == 0 && o == 1) {
        document.querySelector('.J2a').src = "Public/cards/" + J2[0] + ".png";
        document.querySelector('.J2b').src = "Public/cards/" + J2[1] + ".png";
        tj2 = 1;
    } else {
        document.querySelector('.J2a').src = "Public/cards/back_card.png";
        document.querySelector('.J2b').src = "Public/cards/back_card.png";
        tj2 = 0;
    }
})
Z3.addEventListener("click", function () {
    if (tj1 == 0 && tj2 == 0 && tj3 == 0 && tj4 == 0 && tj5 == 0 && o == 1) {
        document.querySelector('.J3a').src = "Public/cards/" + J3[0] + ".png";
        document.querySelector('.J3b').src = "Public/cards/" + J3[1] + ".png";
        tj3 = 1;
    } else {
        document.querySelector('.J3a').src = "Public/cards/back_card.png";
        document.querySelector('.J3b').src = "Public/cards/back_card.png";
        tj3 = 0;
    }
})
Z4.addEventListener("click", function () {
    if (tj1 == 0 && tj2 == 0 && tj3 == 0 && tj4 == 0 && tj5 == 0 && o == 1) {
        document.querySelector('.J4a').src = "Public/cards/" + J4[0] + ".png";
        document.querySelector('.J4b').src = "Public/cards/" + J4[1] + ".png";
        tj4 = 1;
    } else {
        document.querySelector('.J4a').src = "Public/cards/back_card.png";
        document.querySelector('.J4b').src = "Public/cards/back_card.png";
        tj4 = 0;
    }
})
Z5.addEventListener("click", function () {
    if (tj1 == 0 && tj2 == 0 && tj3 == 0 && tj4 == 0 && tj5 == 0 && o == 1) {
        document.querySelector('.J5a').src = "Public/cards/" + J5[0] + ".png";
        document.querySelector('.J5b').src = "Public/cards/" + J5[1] + ".png";
        tj5 = 1;
    } else {
        document.querySelector('.J5a').src = "Public/cards/back_card.png";
        document.querySelector('.J5b').src = "Public/cards/back_card.png";
        tj5 = 0;
    }
})