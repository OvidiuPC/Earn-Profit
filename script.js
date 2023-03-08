const depunere = document.getElementById("depunere");
const rata = document.getElementById("rata");
const ani = document.getElementById("ani");
const calculeaza = document.getElementById("calculeaza");
const rezultate = document.getElementById("rezultate");

calculeaza.addEventListener("click", function () {
    const depunereVal = parseFloat(depunere.value);
    const rataVal = parseFloat(rata.value) / 100;
    const aniVal = parseInt(ani.value);

    let suma = depunereVal;
    let tabelHTML = "<table><tr><th>An</th><th>Profit</th></tr>";

    for (let i = 1; i <= aniVal; i++) {
        const profit = suma * rataVal;
        suma += profit;
        tabelHTML += "<tr><td>" + i + "</td><td>" + profit.toFixed(2) + "</td></tr>";
    }

    tabelHTML += "<tr><td><strong>Total:</strong></td><td><strong>" + suma.toFixed(2) + "</strong></td></tr></table>";

    rezultate.innerHTML = tabelHTML;
});
