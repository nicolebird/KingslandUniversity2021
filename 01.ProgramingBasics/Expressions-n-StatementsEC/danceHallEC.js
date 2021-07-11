function main(L, W, A) {
    let hallAreaSqCenti = (L * 100) * (W * 100);
    let wardAreaSqCenti = (A * 100) * (A * 100);
    let bench = hallAreaSqCenti / 10;
    let availRoom = hallAreaSqCenti - wardAreaSqCenti - bench;
    let spaceNeededEach = 40 + 7000;
    let calculateNumDancers = availRoom / spaceNeededEach;
    console.log(Math.floor(calculateNumDancers));
}
main(40, 32, 1);
main(50, 25, 2);