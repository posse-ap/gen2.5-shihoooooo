"use strict";

const takanawa= document.getElementById("takanawa");
const takawa=document.getElementById("takawa");
const kouwa=document.getElementById("kouwa");
const answerbox11= document.getElementById("answerbox11");
const answerbox12=document.getElementById("answerbox12")

takanawa.onclick = function() {
  // takanawa.style.backgroundColor = "#08b3f0";
  // takanawa.innerHTML = "クリックされた！";
  takanawa.classList.add("blue");
  answerbox11.style.display="block";
}

takawa.onclick = function () {
  takawa.classList.add("red")
  answerbox12.style.display="block";
}

kouwa.onclick = function () {
  kouwa.classList.add("red")
  answerbox12.style.display="block";
}