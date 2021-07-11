function main(array1, array2){
    array1 = [1,2,3];
    array2 = [1,2,3];
    boolean = array1 === array2;
    console.log(boolean);
}

main(["10", "20", "30"], ["10", "20", "30"]);  //Arrays are identical.  Sum: 60
main([`1`,`2`,`3`,`4`,`5`],[`1`,`2`,`3`,`4`,`5`]); //Arrays are not identical.  Found difference at 2 index
main([`1`], [`10`]);  //Arrays are not identical.  Found difference at 0 index.