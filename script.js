var timerEl = document.querySelector("span")
var startButton = document.querySelector(".button")
var startContainer = document.querySelector("header")
var questionArea = document.querySelector("section")
var questions = [{
questionText: "what color is the sky",choices: ["red", "blue", "white", "black"], correctAwnser: "blue" }, { 
questionText: "what many states in the USA", choices: [52,20,49,30], correctAwnser: 52 },
{questionText:"what is my favorites food?", choices:["noodles","rice","meat","fish"],correctAwnser:"all of the above"},
{questionText:"what is my nationality?", choices:["Korean","vietnamese","japanese","American"], correctAwnser:"American"}]

var currentQuestionIndex = 0
var questionText = document.querySelector("#questiontext")
var anwserButton1 = document.querySelector("#anwserbutton1")
var anwserButton2 = document.querySelector("#anwserbutton2")
var anwserButton3 = document.querySelector("#anwserbutton3")
var anwserButton4 = document.querySelector("#anwserbutton4")
var timerInterval 
var timeleft = 60
function timer(){
    
    timerInterval = setInterval(() => {
     if (timeleft > 0){
         timeleft--
     timerEl.innerText = timeleft    
     }else{
         clearInterval(timerInterval)
     }   
    }, 1000);
}


function checkAnwser(event){
  var userchoices = event.target.innerText
if (userchoices === questions[currentQuestionIndex].correctAwnser){
   questionText.innerText = "corrected"
    currentQuestionIndex++
}else{
    questionText.innerText = "Incorrected"
    currentQuestionIndex++
}
setTimeout(function(){
    if (currentQuestionIndex > questions.length - 1){
        clearInterval(timerInterval)
    }else{
        displayQuestion ()
    }

    
},1000)

    
    console.log(event)
console.log(event.target.innerText)
}
function displayQuestion () {
    document.getElementById("questiontext").textContent = questions[currentQuestionIndex].questionText
    var button = document.querySelectorAll(".btn-answer")
    for (let i = 0; i <button.length;i++)
    {
       button[i].textContent = questions[currentQuestionIndex].choices[i]
}}
anwserButton1.addEventListener("click",checkAnwser)

anwserButton2.addEventListener("click",checkAnwser)
anwserButton3.addEventListener("click",checkAnwser)
anwserButton4.addEventListener("click",checkAnwser)
startButton.addEventListener("click", function () {
timer()
   
    startContainer.style.display = "none"
    questionArea.style.display = "block"
   
})
displayQuestion ();