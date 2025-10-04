## Author
Lichao Huang

## Adventure Plan

Level 0: Start <———————————————————————————————————————————┐
  |                                                        |
  v                                                        |
Level 1: Choose Task                                       |
  ├── Red: "Crystal Collection"                            |
  |      |                                                 |
  |      v                                                 |
  |   Level 2: Choose Location                             |
  |      ├── Cave                                          |
  |      |     |                                           |
  |      |     v                                           |
  |      |  Level 3: Mission accomplished! (real crystal)  |
  |      |     └── Try Again? → Restart ———————————————————|
  |      |                                                 |
  |      └── Glass Factory                                 |
  |            |                                           |
  |            v                                           |
  |        Level 3: Mission accomplished! (glass crystal)  |
  |            └── Try Again? → Restart ———————————————————|
  |                                                        |
  └── Blue: "Gathering acorns"                             |
         |                                                 |
         v                                                 |
     Level 2: Arrest Him!                                  |
         |                                                 |
         v                                                 |
     Level 3: Justice Bounty Hunter                        |
         └── Try Again? → Restart —————————————————————————┘


Adventure Game Flow:

Level 0: The game starts with a prompt asking if the player is ready for an adventure.

Level 1: The player chooses a task:

    Red Task – "Crystal Collection":

        Level 2: 
            The player chooses a location:

            Level 3:
                Cave: The mission succeeds with a real crystal. Player can choose to try again.

                Glass Factory: The mission uses glass instead of crystal. Player can choose to try again.

    Blue Task – "Gathering Acorns":

        Level 2: 
            The player discovers the squirrel is a fugitive.

            Level 3: 
                The player delivers the squirrel to the police and earns a reward. Player can choose to try again.

Restart Option: At the end of any path, the player can select "Try Again?" to restart the game from Level 0.


Description of Coding Process:
    This time, the programming time was split into several sessions, so my thinking process wasn't continuous. I should try to find a full block of time for programming next time. The CSS and HTML programming process was relatively quick and familiar, while the JS process required more thinking and took the most time.

Discussion of Challenges Faced：
    When I finished level 1 and tried to advance to level 2, the console reported an error, so I debugged it and found that it was because I removed the previous buttons and appended new ones. Therefore, I could only put all subsequent event listeners into the first event listener to make the program run.

Consideration of Improvements：
    Next time, maybe you can try to use function to make the code more reusable, so you don’t have to write a long string of similar code every time.