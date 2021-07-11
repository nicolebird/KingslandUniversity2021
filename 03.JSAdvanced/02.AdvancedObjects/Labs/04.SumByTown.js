//One way to do this
function main(array) {
    let object = {};
    for (let i = 0; i < array.length; i += 2) {
        if (object.hasOwnProperty(array[i])) {
            object[array[i]] = object[array[i]] + Number(array[i+1]);
        }else{
            object[array[i]] = Number(array[i+1]);
        }
    }
    console.log(JSON.stringify(object));
}

main([`Sydney`,`20`,`Melbourne`,`3`,`Sydney`,`5`,`Melbourne`,`4`]);  //{"Sydney":25,"Melbourne":7}


//Another way

function main(someArray){
    let finalObject = {};

    for (let i = 0; i < someArray.length; i += 2) {
        if(!finalObject[someArray[i]]){
            //console.log(`No key found, the key is`, someArray[i]);
            finalObject[someArray[i]] = +someArray[i + 1];
        } else{
            finalObject[someArray[i]] += +someArray[i + 1];
        }
        
    }
    JSON.stringify(finalObject);
    console.log(JSON.stringify(finalObject));
}

main([`Sydney`,`20`,`Melbourne`,`3`,`Sydney`,`5`,`Melbourne`,`4`]);  //{"Sydney":25,"Melbourne":7}