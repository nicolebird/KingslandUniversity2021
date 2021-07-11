function main(type, rows, seats) {
    let Premiere = 12.00;
    let Normal = 7.50;
    let Discount = 5.00;
    let price = 0.00;

    if (type == "Premiere") {
        price = Premiere * rows * seats;
    } else if (type == "Normal") {
        price = Normal * rows * seats;
    }else {
        price = Discount * rows * seats;
    }
    console.log(`${price.toFixed(2)} leva`);
}
main("Premiere", 10, 12);
// main("Normal", 21, 13);
// main("Discount", 12, 30);

//not right but gets results on VS, wrong in HWG
