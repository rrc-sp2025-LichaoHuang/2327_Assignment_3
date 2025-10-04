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