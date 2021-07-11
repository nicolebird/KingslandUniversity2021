//First way to do it
function main(array) {
    array = array.map(Number);
    let result = [];
    for(let element of array) {
        if(element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    result.forEach(el => console.log(el));
}

main([7, -2, 8, 9]);
// -2
// 7
// 8
// 9

//Another way

function main(someArr){
    negPosNums(someArr);
}

function negPosNums(numArr){
    let finalArr = [];

    for(let num of numArr){
        if(num < 0){
            finalArr.unshift(num);
        }else{
            finalArr.push(num);
        }
    }

    for(let num of finalArr){
        console.log(num);
    }
}

main([7, -2, 8, 9]);

//Another way

function main(element){
    let output = [];
    element.forEach(el => {
        el >= 0? output.push(el):output.unshift(el);

    });
    output.forEach(item => );
}
