/*
    Name:Lichao Huang
    Date: October 1, 2025
    Info: This is an Adventure game
*/

// Get the game title element and set its initial text for level 0
const adventureTitleID = document.getElementById("title");
let adventureLevelZeroTitle = "Are you ready for Adventure?";
adventureTitleID.textContent = adventureLevelZeroTitle;

// Get the question element and set its initial text for level 0
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
let adventureLevelThreeBlueTitle = "Justice Bounty Hunter"
let questionLevelThreeArrestQuestion = `You accidentally caught a fugitive. 
You effortlessly delivered the sleeping squirrel to the police station. 
The sheriff praised your insight and offered you a reward of thirty gold coins.`

// Get important DOM elements
const buttonGoID = document.getElementById("next-btn")
const gameContainer = document.getElementById("game-container");
const missionButton = document.getElementById("missionButton");
// Level 1 select Task
buttonGoID.addEventListener("click", () => {
    
    // Update the title and question text to show level 1 content
    adventureTitleID.textContent = adventureLevelOneTitle;
    adventureQuestionID.textContent = questionLevelOneQuestion;
    
    // Create new buttons for the missions and the "Try Again" option
    const redMission = document.createElement("button");
    const blueMission = document.createElement("button");
    const again = document.createElement("button");
    
    // Set the text labels for each button
    redMission.textContent = "Crystal Collection";
    blueMission.textContent = "Gathering acorns";
    again.textContent = "Try Again?"
    
    // Assign unique IDs to each button for later reference
    redMission.id = "redMission";
    blueMission.id = "blueMission";
    again.id = "again"
    
    // Add the red and blue mission buttons in the DOM
    missionButton.appendChild(redMission);
    missionButton.appendChild(blueMission);

    // Get references to the newly added mission buttons for later use
    const buttonRedMissionID = document.getElementById("redMission")
    const buttonBlueMissionID = document.getElementById("blueMission")
    
    // Remove the "Go!" button from the DOM since it is going to the next level.
    buttonGoID.remove();

    // Level 2 Red Mission
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
        // Level 3 Cave
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

        // Level 3 GlassFactory
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
    // Level 2 Blue Mission
    buttonBlueMissionID.addEventListener("click", () =>{
        adventureTitleID.textContent = adventureLevelTwoBlueTitle;
        adventureQuestionID.textContent = questionLevelTwoBlueQuestion;

        const arrest = document.createElement("button");

        arrest.textContent = "Arrest Him!"

        arrest.id = "arrest"

        missionButton.appendChild(arrest);

        const buttonArrestID = document.getElementById("arrest")

        buttonRedMissionID.remove()
        buttonBlueMissionID.remove()

        // Level 3 arrest 
        buttonArrestID.addEventListener("click", () =>{
            adventureTitleID.textContent = adventureLevelThreeBlueTitle;
            adventureQuestionID.textContent = questionLevelThreeArrestQuestion;

            missionButton.appendChild(again);
            const buttonAgainID = document.getElementById("again")

            buttonArrestID.remove();

            buttonAgainID.addEventListener("click", () =>{
                location.reload();
        })
    })

    /* The following code adds an effect to the task button. 
    When the mouse moves over the button, the task details 
    are displayed on the main interface. When the mouse moves 
    away, the original information is displayed. 
    The gold coin is also highlighted to make it more "golden". */

    // red  button hover 
    redMission.addEventListener("mouseenter", () => {
        // Save the text before hover
        const tempText = adventureQuestionID.innerHTML;
        // Modify the displayed text
        adventureQuestionID.innerHTML = `A husband wants you to find him a crystal as a 
        gift for his wife for their wedding anniversary.<br>
        He is willing to pay you <span class="gold">three gold coins</span>.`;
    
    redMission.addEventListener("mouseleave", function leaveHandler() {
        // Restore the text before hover
        adventureQuestionID.innerHTML = tempText;
    });
    });

    // Blue button hover 
    blueMission.addEventListener("mouseenter", () => {
        const tempText = adventureQuestionID.innerHTML;
        adventureQuestionID.innerHTML = `A drunk squirrel takes out 
        <span class="gold">two gold coins </span>
        and asks you to go to the woods to collect acorns for the winter.<br>
         Then he falls drunkenly on the table and starts snoring.`;

        blueMission.addEventListener("mouseleave", function leaveHandler() {
            adventureQuestionID.innerHTML = tempText;
        });
    });

})
})