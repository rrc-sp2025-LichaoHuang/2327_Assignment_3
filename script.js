/*
    Name:Lichao Huang
    Date: October 1, 2025
    Info: This is an Adventure game
*/


const adventureTitleID = document.getElementById("title");
let adventureLevelZeroTitle = "Are you ready for Adventure?";
adventureTitleID.textContent = adventureLevelZeroTitle;

const adventureQuestionID = document.getElementById("question");
let questionLevelZeroQuestion = "Press the button to start the adventure";
adventureQuestionID.textContent = questionLevelZeroQuestion;

// level 1 text
let adventureLevelOneTitle = "Take on adventure missions"
let questionLevelOneQuestion = `You walked into the tavern. 
With your current reputation, you can only choose two simple tasks.`;
// level 2 text
let adventureLevelTwoRedTitle = "Adventure Quest: Finding the Crystal";
let questionLevelTwoRedQuestion = `You decide to help the man find the crystal. 
But where to find it?`;
let adventureLevelTwoBlueTitle = "Discover the criminal"
let questionLevelTwoBlueQuestion = `As you were about to leave to collect acorns
 for the squirrel, you discovered a scar on his neck, which revealed that the 
 squirrel was the fugitive robber from the Acorn Bank case.`

// level 3 text
let adventureLevelThreeTitle = "Mission accomplished!"
let questionLevelThreeRCaveQuestion = `The crystal you found is worth at least 
three thousand gold coins. But you were only paid three gold coins. 
Fortunately, you didn't know this.`
let questionLevelThreeGlassFactoryQuestion = `You used glass instead of crystal 
to complete the task and received gold coins as a reward, but he will find your 
"glass crystal" sooner or later. Now, leave this town and don't come back.`


const buttonGoID = document.getElementById("next-btn")
const gameContainer = document.getElementById("game-container");
const missionButton = document.getElementById("missionButton");

buttonGoID.addEventListener("click", () => {
    
    adventureTitleID.textContent = adventureLevelOneTitle;
    adventureQuestionID.textContent = questionLevelOneQuestion;
    
    const redMission = document.createElement("button");
    const blueMission = document.createElement("button");
    const again = document.createElement("button");
    
    redMission.textContent = "Crystal Collection";
    blueMission.textContent = "Gathering acorns";
    again.textContent = "Try Again?"
    
    redMission.id = "redMission";
    blueMission.id = "blueMission";
    again.id = "again"
    
    missionButton.appendChild(redMission);
    missionButton.appendChild(blueMission);

    const buttonRedMissionID = document.getElementById("redMission")
    const buttonBlueMissionID = document.getElementById("blueMission")
    
    
    buttonGoID.remove();

    // redMission
    buttonRedMissionID.addEventListener("click", () =>{
        adventureTitleID.textContent = adventureLevelTwoRedTitle;
        adventureQuestionID.textContent = questionLevelTwoRedQuestion;

        const cave = document.createElement("button");
        const glassFactory = document.createElement("button");

        cave.textContent = "Cave";
        glassFactory.textContent = "Glass Factory";

        cave.id = "cave";
        glassFactory.id = "glassFactory";
        
        missionButton.appendChild(cave);
        missionButton.appendChild(glassFactory);

        const buttonCaveID = document.getElementById("cave")
        const buttonGlassFactoryID = document.getElementById("glassFactory")

        buttonRedMissionID.remove()
        buttonBlueMissionID.remove()
        // Cave
        buttonCaveID.addEventListener("click", () =>{
            adventureTitleID.textContent = adventureLevelThreeTitle;
            adventureQuestionID.textContent = questionLevelThreeRCaveQuestion;

            missionButton.appendChild(again);
            const buttonAgainID = document.getElementById("again")

            buttonCaveID.remove();
            buttonGlassFactoryID.remove();

            buttonAgainID.addEventListener("click", () =>{
                location.reload();
            })
        })

        // GlassFactory
        buttonGlassFactoryID.addEventListener("click", () =>{
            adventureTitleID.textContent = adventureLevelThreeTitle;
            adventureQuestionID.textContent = questionLevelThreeGlassFactoryQuestion;

            missionButton.appendChild(again);
            const buttonAgainID = document.getElementById("again")

            buttonCaveID.remove();
            buttonGlassFactoryID.remove();

            buttonAgainID.addEventListener("click", () =>{
                location.reload();
            })
        })
    })

    buttonBlueMissionID.addEventListener("click", () =>{
        adventureTitleID.textContent = adventureLevelTwoBlueTitle;
        adventureQuestionID.textContent = questionLevelTwoBlueQuestion;

        const arrest = document.createElement("button");

        arrest.textContent = "Arrest Him!"

        arrest.id = "arrest"

        missionButton.appendChild(arrest);

        buttonRedMissionID.remove()
        buttonBlueMissionID.remove()
        
        
    })

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










