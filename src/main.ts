const mainOutput = document.querySelector("#output") as HTMLDivElement;
let input = document.querySelector("#ibsinput") as HTMLInputElement;
let inputGrams = document.querySelector("#gramsinput") as HTMLInputElement;
let inputKilo = document.querySelector("#kilogramsinput") as HTMLInputElement;
let inputOunces = document.querySelector("#ouncesinput") as HTMLInputElement;

//STYLES
mainOutput.style.visibility = "hidden";

input.addEventListener("input", function (e: MouseEvent) {
  mainOutput.style.visibility = "visible";
  // console.log("g4ogn3ogn");
  let lbs: number= (e.target as HTMLInputElement).value;
  // console.log(lbs);

  inputGrams.innerHTML = (lbs / 0.0022046).toString();
  inputKilo.innerHTML = (lbs / 0.2046).toString();
  inputOunces.innerHTML = (lbs * 16).toString();
});
