function area(){
    return this.x * this.y;
}
function vol(){
    return this.x * this.y * this.z;
}
function main(area,vol,input){
    let outputArray = [];
    let arrayOfObjects = JSON.parse(input);
    //console.log(input, arrayOfObjects);
    //return `area: ${area}, volume: ${vol}`;

    for(var eachItem of arrayOfObjects){
       //console.log("each item is", eachItem);
       outputArray.push({ 
           area: area.call(eachItem), 
           volume: vol.call(eachItem)
        });

    }
    console.log(outputArray);
}


main(area, vol, `[     {"x":"1","y":"2","z":"10"},     {"x":"7","y":"7","z":"10"},     {"x":"5","y":"2","z":"10"}     ]`);
