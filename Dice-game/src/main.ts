let previousValueOfFirstDice = 1;
let previousValueOfSecondDice = 1;
let matchResult = document.querySelector("#match-status")
let btn = document.querySelector("button");
if(btn){
  btn.addEventListener("click",()=>{
    let randomNo1: number = Math.floor(Math.random() * 6) + 1;
    let randomNo2: number = Math.floor(Math.random() * 6) + 1;
    let dice1 = document.querySelector(`.first-dice .dice-${randomNo1}`) as HTMLElement;
    let dice2 = document.querySelector(`.second-dice .dice-${randomNo2}`) as HTMLElement;
    if(randomNo1 > randomNo2){
      if(matchResult){
        matchResult.innerHTML = "Player 1 winner"
      }
    }else if(randomNo2>randomNo1){
      if(matchResult){
        matchResult.innerHTML = "Player 2 winner"
      }
    }else if(randomNo1 === randomNo2){
      if(matchResult){
        matchResult.innerHTML = "Draw"
      }
    }
    if(previousValueOfFirstDice && previousValueOfSecondDice){
      let previousElementofFirstDice = document.querySelector(`.first-dice .dice-${previousValueOfFirstDice}`);
      let previousElementofSecondDice = document.querySelector(`.second-dice .dice-${previousValueOfSecondDice}`);
      if(previousElementofFirstDice && previousElementofSecondDice){
        previousElementofFirstDice.style.display = "none";
        previousElementofSecondDice.style.display = "none";
      }
    } 
    if(dice1){
      dice1.style.display = "block";
      dice2.style.display = "block";
    }
    previousValueOfFirstDice = randomNo1;
    previousValueOfSecondDice = randomNo2;
  })
}