var startButton = document.querySelector(".button")
var starContainer = document.querySelector("header")
var questionArea = document.querySelector("section")
var questions = [{questionText: "what color is the sky", choices: ["red", "blue", "white", "black"], correctAwnser: "blue" }, { questionText: "what many states in the USA", choices: [52], correctAwnser: 52 }]
var currentQuestionIndex = 0
var questionText = document.querySelector("#questiontext")
var anwserButton1 = document.querySelector("#anwserbutton1")
var anwserButton2 = document.querySelector("#anwserbutton2")
var anwserButton3 = document.querySelector("#anwserbutton3")
var anwserButton4 = document.querySelector("#anwserbutton4")
function checkAnwser(event){
    console.log(event)
console.log(event.target.innerText)
}
anwserButton1.addEventListener("click",checkAnwser)
anwserButton2.addEventListener("click",checkAnwser)
anwserButton3.addEventListener("click",checkAnwser)
anwserButton4.addEventListener("click",checkAnwser)
startButton.addEventListener("click", function () {
    console.log("hello")
    starContainer.style.display = "none"
    questionArea.style.display = "block"
})