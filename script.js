function init() {
    toggleInputs();
}

function celsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("rumus").value = "(" + celsius + " * 9 / 5) " + "32 = " + fahrenheit.toFixed(2) + "°F";
    document.getElementById("hasil").value = fahrenheit.toFixed(2) + " °F";
}

function fahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("rumus").value = "(" + fahrenheit + " - 32) " + "* 5 / 9 = " + celsius.toFixed(2) + "°C";
    document.getElementById("hasil").value = celsius.toFixed(2) + " °C";
}

function hapus() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("rumus").value = "";
    document.getElementById("hasil").value = "";
}



function toggleInputs() {
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");
    var celciusBtn = document.getElementById("btn-celcius")
    var fahrenheitBtn = document.getElementById("btn-fahrenheit")
    var switchBtn = document.getElementById("btn-switch");

    if (switchBtn.textContent === "Switch to Fahrenheit") {
        switchBtn.textContent = "Switch to Celsius";
        celsius.classList.add("hidden");
        fahrenheit.classList.remove("hidden");
        fahrenheitBtn.classList.remove("hidden");
        celciusBtn.classList.add("hidden");
    } else {
        switchBtn.textContent = "Switch to Fahrenheit";
        fahrenheit.classList.add("hidden");
        celsius.classList.remove("hidden");
        celciusBtn.classList.remove("hidden");
        fahrenheitBtn.classList.add("hidden");
    }
}


function toggleCheckbox() {
    var switchBtn = document.getElementById("switchBtn");
    switchBtn.checked = !switchBtn.checked; 
    toggleInputs();
}


window.onload=init;