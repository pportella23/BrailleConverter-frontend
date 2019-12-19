import * as braille from '../dictionary.js';
//var http = require('http');

let payload = {
    "a": "",
    "b": ""
}

var button = document.getElementById('button');
button.addEventListener('click', function () {
    breakIntoPayload();
}, false);

function breakIntoPayload() {
    let bruteText = document.getElementById('textArea').value
    let i = 0;
    let j = 0;
    let count = 0;

    if (bruteText != null) {
        payload.a = "servWrite";
        payload.b = bruteText.length;
    }

    let treatedText = bruteText.split('\n');

    for (let l = 0; l < treatedText.length; l++) {
        treatedText[l] = braille.toBraille(treatedText[l])
    }

    let line1 = '';
    let line2 = '';
    let line3 = '';

    console.log(treatedText);

    treatedText.forEach(t => {

        for (let k = 0; k < t.length; k++) {
            line1 = `line_` + (1 + j);
            line2 = `line_` + (2 + j);
            line3 = `line_` + (3 + j);

            if (payload[line1] == undefined && payload[line2] == undefined && payload[line3] == undefined) {
                payload[line1] = t[k].charAt(0) + t[k].charAt(1);
                payload[line2] = t[k].charAt(2) + t[k].charAt(3);
                payload[line3] = t[k].charAt(4) + t[k].charAt(5);
            }
            else {
                payload[line1] += t[k].charAt(0) + t[k].charAt(1);
                payload[line2] += t[k].charAt(2) + t[k].charAt(3);
                payload[line3] += t[k].charAt(4) + t[k].charAt(5);
            }
            count++;
            if (count > 24) {
                count = 0;
                j = j + 3;
            }
        }

        count = 0;
        j = j + 3;

    });

    console.log(payload);


    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/add";

    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Requisição enviada com sucesso!");
        }
    };

    var data = JSON.stringify(payload);

    xhr.send(data);

    payload = {
        "a": "",
        "b": ""
    }

}