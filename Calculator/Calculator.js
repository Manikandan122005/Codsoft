function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function ClearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        alert("Invalid expression");
    }
}
