'use strict';

var display = "";
var display2 = "";
var ats = "";
var sk1 = "";
var sk2 = "";
var math = ""

function number() {
    switch () {
        case "nr1":
            document.getElementById("atsakymas").innerHTML += "1";
            break;
        case "nr2":
            document.getElementById("atsakymas").innerHTML += "2";
            break;
        case "nr3":
            document.getElementById("atsakymas").innerHTML += "3";
            break;
        case "nr4":
            document.getElementById("atsakymas").innerHTML += "4";
            break;
        case "nr5":
            document.getElementById("atsakymas").innerHTML += "5";
            break;
        case "nr6":
            document.getElementById("atsakymas").innerHTML += "6";
            break;
        case "nr7":
            document.getElementById("atsakymas").innerHTML += "7";
            break;
        case "nr8":
            document.getElementById("atsakymas").innerHTML += "8";
            break;
        case "nr9":
            document.getElementById("atsakymas").innerHTML += "9";
            break;
        case "nr0":
            document.getElementById("atsakymas").innerHTML += "0";
            break;
        case "point":
            document.getElementById("atsakymas").innerHTML += ".";
    }

}

function action() {

    display = Number(document.getElementById("atsakymas").value);
    sk1 = display;
    math = document.

    document.getElementById("atsakymas").innerHTML = "0";
}

function actionequal() {

    display2 = Number(document.getElementById("atsakymas").value);
    sk2 = display2;

    switch (action.id()) {
        case "div":
            ats = sk1 / sk2;
            document.getElementById("atsakymas").innerHTML = ats;
            break;
        case "time":
            ats = sk1 * sk2;
            document.getElementById("atsakymas").innerHTML = ats;
            break;
        case "min":
            ats = sk1 - sk2;
            document.getElementById("atsakymas").innerHTML = ats;
            break;
        case "plus":
            ats = sk1 + sk2;
            document.getElementById("atsakymas").innerHTML = ats;
    }
}

