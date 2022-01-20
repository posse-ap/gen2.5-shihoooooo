"use strict";

const box=document.getElementById("box"); 

let answers = [['たかなわ','たかわ','こうわ'],
['かめど','かめと','かめいど'],
['おかとまち','こうじまち','かゆまち'],
['おかどもん','ごせいもん','おなりもん'],
['たたら','とどろき','たたりき'],
['せきこうい','しゃくじい','いじい'],
['ぞうしき','ざっしき','ざっしょく'],
['みとちょう','ごしろちょう','おかちまち'],
['ししぼね','ろっこつ','しこね'],
['こしゃく','こぐれ','こばく']];

let correctanswer = ['たかなわ','かめいど','こうじまち','おなりもん','とどろき','しゃくじい','ぞうしき','おかちまち','ししぼね','こぐれ'];

function shuffle(arr) {
  for (let s = arr.length - 1; s > 0; s--) {
    const t = Math.floor(Math.random() * (s + 1));
    [arr[t], arr[s]] = [arr[s], arr[t]];
  }
  return arr;
}

let container = '';
for (let i = 0; i < 10; i++) {

  const shuffledchoices = shuffle(answers[i]);
  console.log(shuffledchoices);
  
  let choices = '';
  for (let j = 0; j < 3; j++) {
    choices+=`<li class="choice" id="choice${i+1}_${j+1}">${answers[i][j]}</li>`

   
    // const choice2=document.getElementById(`choice${i+2,j+2}`);
    // const choice3=document.getElementById(`choice${i+3,j+3}`);
    }    

  container+=`<h2 class="quizbox" id="quiz${i}">${i+1}. この地名はなんて読む？</h2>
    <div class="quiz-image-container">
      <img class="quiz-image${i+1}" src="image/image${i+1}.png" alt="">
    </div>
    <ul id> ${choices}
    </ul>
    <div class="answerbox" id="correctanswerbox${i}">
      <h3 class="correctanswertitle">正解！</h3>
      <p class="answerword" id="correctanswer${i+1}">正解は「${correctanswer[i]}」です！</p>
    </div>
    <div class="answerbox" id="wronganswerbox${i}">
      <h3 class="wronganswertitle">不正解！</h3>
      <p class="answerword" id="wronganswer${i+1}">正解は「${correctanswer[i]}」です！</p>
    </div>`

  const correctanswerbox=document.getElementById(`correctanswerbox${i}`);
  const wronganswerbox=document.getElementById(`wronganswerbox${i}`)
}
  box.innerHTML = container


for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 3; j++) {
    const chosen=document.getElementById(`choice${i+1}_${j+1}`);
    const choice1=document.getElementById(`choice${(i+1)}_1`);
    const choice2=document.getElementById(`choice${(i+1)}_2`);
    const choice3=document.getElementById(`choice${(i+1)}_3`);
    const correctanswerbox=document.getElementById(`correctanswerbox${i}`);
    const wronganswerbox=document.getElementById(`wronganswerbox${i}`);
    chosen.addEventListener('click', function() {
      if (correctanswer[i]===answers[i][j]) {
        chosen.classList.add("blue");
        correctanswerbox.style.display="block";
        choice1.classList.add("stop");
        choice2.classList.add("stop");
        choice3.classList.add("stop");
      } else {
        chosen.classList.add("red")
        wronganswerbox.style.display="block";
        choice1.classList.add("stop");
        choice2.classList.add("stop");
        choice3.classList.add("stop");
      }
    })
  }
}
  