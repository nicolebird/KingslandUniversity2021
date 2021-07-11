function main (input) {
    //let step = Number(input.pop());
    let step = +input.pop();

    for (let i = 0; i < input.length; i+=step){
        console.log(input[i]);
    }
}
main(["5", "20", "31", "4", "20", "2"]); //5 31 20