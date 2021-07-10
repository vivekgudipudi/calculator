var add = document.querySelector("#add");
var sub = document.querySelector("#sub");
var mul = document.querySelector("#mul");
var div = document.querySelector("#div");

var outputDiv = document.querySelector("#outputDiv");

function addition() {

    var inputOne = parseInt(document.getElementById("input-one").value);
    var inputTwo = parseInt(document.getElementById("input-two").value);

    var addresult = inputOne + inputTwo;
    outputDiv.innerText = addresult;
}

function subtraction() {
    var inputOne = parseInt(document.getElementById("input-one").value);
    var inputTwo = parseInt(document.getElementById("input-two").value);

    var subresult = inputOne - inputTwo;
    outputDiv.innerText = subresult;
}

function multiplication() {
    var inputOne = parseInt(document.getElementById("input-one").value);
    var inputTwo = parseInt(document.getElementById("input-two").value);

    var mulresult = inputOne * inputTwo;
    outputDiv.innerText = mulresult;
}

function division() {
    var inputOne = parseInt(document.getElementById("input-one").value);
    var inputTwo = parseInt(document.getElementById("input-two").value);

    var divresult = inputOne / inputTwo;
    outputDiv.innerText = divresult;
}


add.addEventListener("click", addition);
sub.addEventListener("click", subtraction);
mul.addEventListener("click", multiplication);
div.addEventListener("click", division);