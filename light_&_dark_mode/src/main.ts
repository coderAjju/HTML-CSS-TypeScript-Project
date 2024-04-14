import './light.css'
import './dark.css'
import './style.css'

let Body = document.body;
const checkBox = document.querySelector<HTMLInputElement>(".checkbox");
if (checkBox) {
  checkBox.addEventListener("click", (event) => {
    const elem = event.target as HTMLInputElement;
    if (elem.checked) {
      if(Body){
        Body.classList.remove("light");
        Body.classList.add("dark");
      }
    }else {
      Body.classList.remove("dark");
      Body.classList.add("light");
    }
  });
}
