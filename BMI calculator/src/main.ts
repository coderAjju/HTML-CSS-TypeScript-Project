let calculateBMI = document.querySelector<HTMLButtonElement>("#calculateBMI");
let height = document.querySelector<HTMLInputElement>("#height");
let weight = document.querySelector<HTMLInputElement>("#weight");
let result = document.querySelector<HTMLSpanElement>("#res");

if (calculateBMI) {
  calculateBMI.addEventListener("click", () => {
    if(height && weight){
      let hh = parseFloat(height.value)
      let ww = parseFloat(weight.value)
     if(result){
      result.innerHTML = (ww / (hh/100 * hh/100)).toFixed(2).toString();
     }
    }
  });
}
