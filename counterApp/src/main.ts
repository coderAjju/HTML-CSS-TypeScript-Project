const ope = document.querySelectorAll<HTMLDivElement>(".operator");
const res = document.querySelector<HTMLDivElement>("#res");
const changeValue = document.querySelector<HTMLInputElement>("#changeValue");
if (changeValue) {
  changeValue.value = "1";
}
if (res) {
  res.innerHTML = "0";
}
const arr: string[] = ["-", "+"];

ope.forEach((element, index) => {
  element.innerHTML = arr[index];
});

ope.forEach((elem) => {
  if (elem) {
    elem.addEventListener("click", () => {
      if (elem.innerHTML === "-") {
        if (res && changeValue) {
          const currentValue = parseInt(res.innerHTML);
          res.innerHTML = (
            currentValue - parseInt(changeValue.value)
          ).toString();
        }
      } else if (elem.innerHTML === "+") {
        if (res && changeValue) {
          const currentValue = parseInt(res.innerHTML);
          res.innerHTML = (
            currentValue + parseInt(changeValue.value)
          ).toString();
        }
      }
    });
  }
});

const resetButton = document.querySelector<HTMLButtonElement>("#reset");
if (resetButton) {
  resetButton.addEventListener("click", () => {
    const res = document.querySelector<HTMLDivElement>("#res");
    if (res) {
      res.innerHTML = "0";
    }
  });
}
