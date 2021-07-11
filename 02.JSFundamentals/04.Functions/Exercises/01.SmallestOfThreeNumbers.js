//Write a function which receives three integer numbers to print the smallest.  Use appriopriate name for the function.
//input: 2,5,3  OR   600,342,123   OR   25,21,4
//output:  2 OR 123 OR 4


function main(numberOne, numberTwo, numberThree) {
    function smallestNumber(numberOne, numberTwo, numberThree) {
        let smallest = numberOne;

        if (numberTwo < smallest) {
            smallest = numberTwo;
        }

        if (numberThree < smallest) {
            smallest = numberThree;
        }
    return smallest;
}
console.log(smallestNumber(numberOne,numberTwo,numberThree));
}

main(2,5,3); //2
main(600,342,123);//123
main(25,21,4);//4

//Or this 

let smallest = function (n1, n2, n3){
    if(n1 < n2 && n1 < n3){
        return n1;
    }else if (n2 < n3 && n2 < n1){
        return n2;
    } else if(n3 < n2 && n3 < n1){
        return n3;
    }
};

function main(num1,num2,num3){
    console.log(smallest(num1,num2,num3));
}


main(2,5,3); //2
main(600,342,123);//123
main(25,21,4);//4