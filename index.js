"use strict";

const box=document.getElementById("box"); 

for (let i = 1; i < 11; i++) {
  let container = '';
  container+="<h2 class='quiz"+i+"'>"+i+". この地名はなんて読む？</h2> "+
    "<div class='quiz-image-container'>"+
      "<img class='quiz-image"+i+"' src='image/image"+i+".png' alt=''>"+
    "</div>"+
    "<ul id>"+
     '<li class="choice" id="choice'+i+'-1">たかなわ</li>'+
      '<li class="choice" id="choice'+i+'-2">たかわ</li>'+
      '<li class="choice" id="choice'+i+'-3">こうわ</li>'+ 
    '</ul>'+
    '<div class="answerbox" id="answerbox11">'+
      '<h3 class="correctanswertitle">正解！</h3>'+
      '<p class="answerword" id="correctanswer11">正解は「たかなわ」です！</p>'+
    '</div>'+
    '<div class="answerbox" id="answerbox12">'+
      '<h3 class="wronganswertitle">不正解！</h3>'+
      '<p class="answerword" id="correctanswer12">正解は「たかなわ」です！</p>'+
    '</div>'
    box.innerHTML = container
  }

const takanawa= document.getElementById("choice1-1");
const takawa=document.getElementById("choice1-2");
const kouwa=document.getElementById("choice1-3");
const answerbox11= document.getElementById("answerbox11");
const answerbox12=document.getElementById("answerbox12")



takanawa.onclick = function () {
  // takanawa.style.backgroundColor = "#08b3f0";
  // takanawa.innerHTML = "クリックされた！";
  takanawa.classList.add("blue");
  answerbox11.style.display="block";
  takanawa.classList.add("stop");
  takawa.classList.add("stop");
  kouwa.classList.add("stop");
}
  
  takawa.onclick = function () {
    takawa.classList.add("red")
    answerbox12.style.display="block";
    takanawa.classList.add("stop");
    takawa.classList.add("stop");
    kouwa.classList.add("stop");
  }

kouwa.onclick = function () {
  kouwa.classList.add("red")
  answerbox12.style.display="block";
  takanawa.classList.add("stop");
  takawa.classList.add("stop");
  kouwa.classList.add("stop");
}

