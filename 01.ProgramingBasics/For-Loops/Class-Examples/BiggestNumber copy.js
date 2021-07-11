function main(n, numbers){
    let maxNumber = -Infinity;
    for(let i = 0; i <= n; i++ && i != 0 &&  i != undefined ){
        // && i != 0 &&  i != undefined  adding this ensures it will not be an infinite loop that has to be manually stopped
        let number = numbers.shift();
        if(number > maxNumber){
            maxNumber = number;
        }
    }
    console.log(maxNumber);
}

//main(3, [40, 90, 50]);
main(2, [-90, -40]);

//main = biggestNumber
// -Infinity is the smallest number