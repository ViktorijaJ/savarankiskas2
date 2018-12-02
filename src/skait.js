'use strict';


var sk1 = undefined;
var sk2 = undefined;
var veiksmas = undefined;
var atsakymas = undefined;
var istorija = [];

var Action = function (nr1, nr2, action, answer) {
    this.nr1 = nr1;
    this.nr2 = nr2;
    this.action = action;
    this.answer = answer;

};

function number(value) {
    if (atsakymas != undefined) {
        atsakymas = undefined;
        sk1 = undefined;
        sk2 = undefined;
        veiksmas = undefined;
        document.getElementById("atsakymas").innerHTML = "";
    }

    switch (value) {
        case "1":
            document.getElementById("atsakymas").innerHTML += "1";
            break;
        case "2":
            document.getElementById("atsakymas").innerHTML += "2";
            break;
        case "3":
            document.getElementById("atsakymas").innerHTML += "3";
            break;
        case "4":
            document.getElementById("atsakymas").innerHTML += "4";
            break;
        case "5":
            document.getElementById("atsakymas").innerHTML += "5";
            break;
        case "6":
            document.getElementById("atsakymas").innerHTML += "6";
            break;
        case "7":
            document.getElementById("atsakymas").innerHTML += "7";
            break;
        case "8":
            document.getElementById("atsakymas").innerHTML += "8";
            break;
        case "9":
            document.getElementById("atsakymas").innerHTML += "9";
            break;
        case "0":
            document.getElementById("atsakymas").innerHTML += "0";
            break;
        case "point":
            if (document.getElementById('atsakymas').innerHTML.indexOf(value) == -1) {
                document.getElementById('atsakymas').innerHTML += ".";
            }
            break;
    }
}


function action(act) {
    veiksmas = act;
    if (sk1 == undefined) {
        sk1 = Number(document.getElementById("atsakymas").innerHTML);
        document.getElementById("atsakymas").innerHTML = ""

    }
}

function actionequal() {
    if (sk1 != undefined && action != undefined) {
        sk2 = Number(document.getElementById("atsakymas").innerHTML);
        if (isNaN(sk2)) {
            sk2 = 0;
        }
        switch (veiksmas) {
            case "divide":
                atsakymas = sk1 / sk2;
                break;
            case "multiply":
                atsakymas = sk1 * sk2;
                break;
            case "minus":
                atsakymas = sk1 - sk2;
                break;
            case "plus":
                atsakymas = sk1 + sk2;
                break;

        }
    }

    document.getElementById("atsakymas").innerHTML = atsakymas;

    var veiksmai = new Action(sk1, sk2, veiksmas, atsakymas);

    istorija.push(veiksmai);
    sk1 = undefined;
    sk2 = undefined;
    veiksmas = undefined;

    perpiestiLentele();
}

function perpiestiLentele() {
    var template = "<tr><td>{nr1}</td><td>{veiksmas}</td><td>{nr2}</td><td>{answer}</td></tr>";
    var tableAnsw = document.getElementById('answ');
    tableAnsw.innerHTML = "<tr class='header'><td>A</td><td>Veiksmas</td><td>B</td><td> = <button  onclick='handleSortUp()' id='sort'>↑</button> <button  onclick='handleSortDown()' id='sort'>↓</button></td></tr>";

    istorija.forEach(item => {
        var eilute = template.replace('{nr1}', item.nr1).replace('{nr2}', item.nr2).replace('{veiksmas}', item.action).replace('{answer}', item.answer);
        tableAnsw.innerHTML += eilute;
    })
}

function handleSortUp() {
    istorija = istorija.sort((a, b) => {

        return a.answer - b.answer;
    });
    perpiestiLentele();
}

function handleSortDown() {
    istorija = istorija.sort((a, b) => {
        return b.answer - a.answer;
    });
    perpiestiLentele();
}

