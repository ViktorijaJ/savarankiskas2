'use strict';


var sk1 = undefined;
var sk2 = undefined;
var veiksmas = undefined;
var atsakymas = undefined;
var istorija = [];

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
            document.getElementById("atsakymas").innerHTML += ".";
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
            case "div":
                atsakymas = sk1 / sk2;
                break;
            case "time":
                atsakymas = sk1 * sk2;
                break;
            case "min":
                atsakymas = sk1 - sk2;
                break;
            case "plus":
                atsakymas = sk1 + sk2;
                break;

        }

        document.getElementById("atsakymas").innerHTML = atsakymas;
        istorija.push({"sk1": sk1, "sk2": sk2, "action": veiksmas, "atsakymas": atsakymas});

        console.log(istorija);
        /// draw table here
    }

}


