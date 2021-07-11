function main(n1, n2, n3){
    let totalSeconds = n1 + n2 + n3;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

main(35, 45, 44);
//main(22, 7, 34);
//main(50, 50, 49);
//main(14, 12, 10);