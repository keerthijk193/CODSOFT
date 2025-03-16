function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        alert("Invalid Expression");
    }
}

function toggleSign() {
    let display = document.getElementById("display");
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}

function squareRoot() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
}

function factorial() {
    let display = document.getElementById("display");
    let num = parseInt(display.value);
    if (num < 0) {
        alert("Factorial of negative number is undefined");
        return;
    }
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    display.value = fact;
}

function power() {
    let display = document.getElementById("display");
    let values = display.value.split("^");
    if (values.length === 2) {
        display.value = Math.pow(parseFloat(values[0]), parseFloat(values[1]));
    } else {
        alert("Use format: base^exponent");
    }
}

function logarithm() {
    let display = document.getElementById("display");
    display.value = Math.log10(parseFloat(display.value));
}

// Aligning mathematical operators on one side and numbers on the other
function updateLayout() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        if (isNaN(button.innerText) && button.innerText !== ".") {
            button.classList.add("operator");
        } else {
            button.classList.add("number");
        }
    });
}

document.addEventListener("DOMContentLoaded", updateLayout);
