/*
    Name:Lichao Huang
    Date: September 23, 2025
    Info: This is an Adventure game
*/


const adventureTitleID = document.getElementById("title");
let adventureLevelZeroTitle = "Are you ready for Adventure?";
adventureTitleID.textContent = adventureLevelZeroTitle;

const adventureQuestionID = document.getElementById("question");
let questionLevelZeroQuestion = "Press the button to start the adventure";
adventureQuestionID.textContent = questionLevelZeroQuestion;


let adventureLevelOneTitle = "Take on adventure missions"
let questionLevelOneQuestion = `You walk into the Adventurer's Guild,
your most junior adventurer, so the guild offers you two options.`;

const bottonID = document.getElementById("next-btn")
const gameContainer = document.getElementById("game-container");

bottonID.addEventListener("click", () => {
    adventureTitleID.textContent = adventureLevelOneTitle;
    adventureQuestionID.textContent = questionLevelOneQuestion;
    const redMission = document.createElement("button");
    const blueMission = document.createElement("button");
    redMission.textContent = "Crystal Collection";
    blueMission.textContent = "Gathering acorns";
    redMission.id = "redMission"
    blueMission.id = "blueMission"
    gameContainer.appendChild(redMission);
    gameContainer.appendChild(blueMission);
    bottonID.remove();
})





