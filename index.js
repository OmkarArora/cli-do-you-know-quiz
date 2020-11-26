// REQUIRED NPM DEPENDENCIES - readline-sync
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Whats your name ? ");

console.log(`Welcome ${userName} !`);

//play function
function play(question, answer) {
  let userAnswer = readlineSync.question(question + "\n");

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("\n-- Correct :) --");
    score += 1;
  } else {
    console.log("Incoreect :(");
    console.log("The correct answer is "+ answer);
  }
  console.log("\nCurrent Score: " + score);
  console.log("----------------\n");
}

var questions = [
    {
        question: "Where does Tanay live ?",
        answer: "Bangalore"
    },
    {
        question: "Where does Tanay work ?",
        answer: "Microsoft"
    }
]

for(let i=0;i<questions.length;i++){
    play(questions[i].question, questions[i].answer);
}

console.log("\n\nFinal Score : " + score);