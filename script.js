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
let questionLevelOneQuestion = `You walked into the tavern. 
With your current reputation, you can only choose two simple tasks.`;

const buttonGoID = document.getElementById("next-btn")
const gameContainer = document.getElementById("game-container");
const missionButton = document.getElementById("missionButton");

buttonGoID.addEventListener("click", () => {
    
    adventureTitleID.textContent = adventureLevelOneTitle;
    adventureQuestionID.textContent = questionLevelOneQuestion;
    
    const redMission = document.createElement("button");
    const blueMission = document.createElement("button");
    
    redMission.textContent = "Crystal Collection";
    blueMission.textContent = "Gathering acorns";
    
    redMission.id = "redMission";
    blueMission.id = "blueMission";
    
    missionButton.appendChild(redMission);
    missionButton.appendChild(blueMission);
    
    buttonGoID.remove();

    redMission.addEventListener("mouseenter", () => {
        const tempText = adventureQuestionID.innerHTML; // 保存悬停前的文本

        adventureQuestionID.innerHTML = `A husband wants you to find him a crystal as a 
        gift for his wife for their wedding anniversary.<br>
        He is willing to pay you <span class="gold">three gold coins</span>.`;

        redMission.addEventListener("mouseleave", function leaveHandler() {
            adventureQuestionID.innerHTML = tempText; // 恢复悬停前的文本
            redMission.removeEventListener("mouseleave", leaveHandler);
        });
    });

    // 蓝色按钮悬停显示
    blueMission.addEventListener("mouseenter", () => {
        const tempText = adventureQuestionID.innerHTML; // 保存悬停前的文本
        adventureQuestionID.innerHTML = `A drunk squirrel takes out 
        <span class="gold">two gold coins </span>
        and asks you to go to the woods to collect acorns for the winter.<br>
         Then he falls drunkenly on the table and starts snoring.`;

        blueMission.addEventListener("mouseleave", function leaveHandler() {
            adventureQuestionID.innerHTML = tempText; // 恢复悬停前的文本
            blueMission.removeEventListener("mouseleave", leaveHandler);
        });
    });

})







