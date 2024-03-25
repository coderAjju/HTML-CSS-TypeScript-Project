let visibility = true;
for (let i = 1; i <= 6; i++) {
  let random1 = Math.floor(Math.random()*7 + 1);
  let random2 = Math.floor(Math.random()*7 + 1);
  let random3 = Math.floor(Math.random()*7 + 1);
  let random4 = Math.floor(Math.random()*7 + 1);
  setTimeout(() => {
    setInterval(()=>{
      if(visibility){
        let div = document.querySelector<HTMLDivElement>(`.dice-${random1}`);
        if(div) div.style.visibility = "hidden"
        visibility = false
      }
      else if(!visibility){
        let div = document.querySelector<HTMLDivElement>(`.dice-${random1}`);
        if(div) div.style.display = "auto"
        visibility = true
      }
    },100)
  }, 2000);
}