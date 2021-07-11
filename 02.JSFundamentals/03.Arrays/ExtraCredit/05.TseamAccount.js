//As a gamer, Peter has a Tseam Account.  He loves to buy new games.  You are given Peter's account with all of his games -> strings, separated by space.  Until you receive "Play!" you will receiving commands which Peter does with his account.

//You may receive following commands
// * Install {game}
//If you receive Install command, you should add the game at last position in the account, but only if it isn't installed already.

// * Uninstall {game}
//If you receive Uninstall command, delete the game if it exists

// * Update {game}
//If you receive Update command, you should update the game if it exists and place it on last position

// * Expansion {game} - {expansion}
//If you receive Expansion command, you should check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";

//INPUT: *On the first input line you will receive Peter's account - sequence of game names, separated by space.
///////// *Until you receive "Play!" you will be receiving commands

//OUTPUT: As output you must print Peter's Tseam account

//CONSTRAINTS:  1)The command will always be valid 2)The game and expansion will be strings and will contain any character, except `-`.  3)Allowed working time/memory: 100ms / 16MB

//INPUT:  [`CS Wow Diablo`, `Install LoL`, `Uninstall WoW, `Update Diablo`, `Expansion CS-Go`, `Play!`]  -> CS CS:Go LoL Diablo


