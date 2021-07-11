//not in homework grader, just practice

function fruitOrVeggies(item) {
    switch(item) {
    //items 
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "cucumber":
        case "pepper":
        case "carrot":
        case "onion":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
    }
}
fruitOrVeggies("nut");
fruitOrVeggies("banana");
fruitOrVeggies("onion");
