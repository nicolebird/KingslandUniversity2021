//Commenting the HW accepted changes

//change solve to main; change the return to console.log 
function solve(input = []) {
    return [...new Set(input)].sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

solve(["Denise", "Ignatius", "Iris", "Isacc", "Indie", "Dean", "Donatello", "Enfuego", "Benjamin", "Biser", "Bounty", "Renard", "Rot"]);
//EXPECTED OUTPUT
// Rot
// Dean
// Iris
// Biser
// Indie
// Isacc
// Bounty
// Denise
// Renard
// Enfuego
// Benjamin
// Ignatius
// Donatello

solve(["Ashton", "Kutcher", "Ariel", "Lilly", "Keyden", "Aizen", "Billy", "Braston"]);
//EXPECTED OUTPUT
// Aizen
// Ariel
// Billy
// Lilly
// Ashton
// Keyden
// Braston
// Kutcher