const mainOutput = document.querySelector("#output");
let input = document.querySelector("#ibsinput");
let inputGrams = document.querySelector("#gramsinput");
let inputKilo = document.querySelector("#kilogramsinput");
let inputOunces = document.querySelector("#ouncesinput");
mainOutput.style.visibility = "hidden";
input.addEventListener("input", function (e) {
    mainOutput.style.visibility = "visible";
    let lbs = e.target.value;
    inputGrams.innerHTML = (lbs / 0.0022046).toString();
    inputKilo.innerHTML = (lbs / 0.2046).toString();
    inputOunces.innerHTML = (lbs * 16).toString();
});
//# sourceMappingURL=main.js.map